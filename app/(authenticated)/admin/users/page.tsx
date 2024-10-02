"use client"

import { useState, useEffect } from "react";
import { useDeleteUser, useAddUser, useGetUsers, useEditUser } from "./hooks";
import { DataGrid, GridActionsCellItem, GridColDef, GridRowId } from "@mui/x-data-grid";
import { Box, IconButton, Tooltip, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';
import { useAuth } from "@/app/providers/auth-provider";

export default function UsersPage() {
  const auth = useAuth();
  const { users, fetchUsers, isLoading } = useGetUsers();
  const { deleteUser } = useDeleteUser();
  const { addUser } = useAddUser();
  const { editUser } = useEditUser();
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<GridRowId | null>(null);
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: ''
  });

  const handleEdit = (id: GridRowId) => {
    const userToEdit = users.find((user) => user.id === id);
    const name = userToEdit?.name.split(' ');
    if (userToEdit) {
      setNewUser({
        ...userToEdit,
        firstName: name?.[0] ?? '',
        lastName: name?.[1] ?? '',
        email: userToEdit.email,
      });
      setCurrentUserId(id);
      setIsEditing(true);
      setOpen(true);
    }
  };

  const handleDelete = async (id: GridRowId) => {
    await deleteUser(String(id));
    toast.success('Usuario eliminado correctamente');
    await fetchUsers();
  };

  const handleAddUser = () => {
    setNewUser({ firstName: '', lastName: '', email: '', role: '' }); // Limpiar campos
    setCurrentUserId(null);
    setIsEditing(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    const { firstName, lastName, email, role } = newUser;

    if (!firstName || !lastName || !email) {
      toast.error('Por favor complete todos los campos');
      return;
    }

    if (isEditing && currentUserId) {
      await editUser(currentUserId.toString(), { firstName, lastName, email, role });
      toast.success('Usuario editado correctamente');
    } else {
      await addUser({ firstName, lastName, email, role });
      toast.success('Usuario agregado correctamente');
    }

    setOpen(false);
    await fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Nombre', flex: 1 },
    { field: 'email', headerName: 'E-mail', flex: 1 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Acciones',
      flex: 1,
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
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" gutterBottom>
          Usuarios
        </Typography>
        <Button variant="contained" color="primary" onClick={handleAddUser}>
          Agregar usuario
        </Button>
      </Box>
      <DataGrid
        rows={users}
        columns={columns}
        loading={isLoading}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? 'Editar usuario' : 'Agregar usuario'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nombre"
            fullWidth
            value={newUser.firstName}
            onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Apellido"
            fullWidth
            value={newUser.lastName}
            onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="E-mail"
            fullWidth
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          {auth.user?.role === 'superadmin' && (
            <TextField
              margin="dense"
              label="Role"
              fullWidth
              select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              defaultValue={'admin'}
            >
              <MenuItem value="admin">
                Admin
              </MenuItem>
              <MenuItem value="basic">
                Básico
              </MenuItem>
            </TextField>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSave} color="secondary">
            {isEditing ? 'Guardar cambios' : 'Guardar'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
