"use client"

import { useState, useEffect } from "react";
import { useGetPlans } from "@/app/hooks";
import { useDeletePlan, useAddPlan } from "./hooks";
import { DataGrid, GridActionsCellItem, GridColDef, GridRowId } from "@mui/x-data-grid";
import { Box, IconButton, Tooltip, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';

export default function PlansPage() {
  const { plans, fetchPlans, isLoading } = useGetPlans();
  const { deletePlan } = useDeletePlan();
  const { addPlan } = useAddPlan();
  const [open, setOpen] = useState(false);
  const [newPlan, setNewPlan] = useState({ name: '', price: '', type: 'home' });

  const handleEdit = (id: GridRowId) => {
    // Manejar la edición del plan
  };

  const handleDelete = async (id: GridRowId) => {
    await deletePlan(String(id));
    toast.success('Plan eliminado correctamente');
    await fetchPlans();
  };

  const handleAddPlan = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    const { name, price, type } = newPlan;

    if (!name || !price || !type) {
      toast.error('Por favor complete todos los campos');
      return;
    }

    await addPlan({ name, price: parseFloat(price), type });
    toast.success('Plan agregado correctamente');
    setOpen(false);
    await fetchPlans();
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 200 },
    {
      field: 'price', headerName: 'Price', width: 150, valueFormatter: (value: number) =>
        value.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 150,
      getActions: (params) => [
        <GridActionsCellItem
          key={`edit-${params.id}`}
          icon={
            <Tooltip title="Edit">
              <IconButton color="primary">
                <EditIcon />
              </IconButton>
            </Tooltip>
          }
          label="Edit"
          onClick={() => handleEdit(params.id)}
        />,
        <GridActionsCellItem
          key={`delete-${params.id}`}
          icon={
            <Tooltip title="Delete">
              <IconButton color="secondary">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          }
          label="Delete"
          onClick={() => handleDelete(params.id)}
        />
      ]
    }
  ];

  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" gutterBottom>
          Planes
        </Typography>
        <Button variant="contained" color="primary" onClick={handleAddPlan}>
          Agregar plan
        </Button>
      </Box>
      <DataGrid
        rows={plans}
        columns={columns}
        loading={isLoading}
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agregar plan</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nombre"
            fullWidth
            value={newPlan.name}
            onChange={(e) => setNewPlan({ ...newPlan, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Precio"
            fullWidth
            type="number"
            value={newPlan.price}
            onChange={(e) => setNewPlan({ ...newPlan, price: e.target.value })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel id="type-label">Typo</InputLabel>
            <Select
              labelId="type-label"
              value={newPlan.type}
              onChange={(e) => setNewPlan({ ...newPlan, type: e.target.value })}
              label="Tipo"
            >
              <MenuItem value="home">En casa</MenuItem>
              <MenuItem value="gym">Gimnasio</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
