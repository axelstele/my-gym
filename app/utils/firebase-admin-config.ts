import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: process.env['FIREBASE_TYPE'],
      project_id: process.env['FIREBASE_PROJECT_ID'],
      private_key_id: process.env['FIREBASE_PRIVATE_KEY_ID']!.replace(/\\n/g, '\n'),
      private_key: process.env['FIREBASE_PRIVATE_KEY'],
      client_email: process.env['FIREBASE_CLIENT_EMAIL'],
      client_id: process.env['FIREBASE_CLIENT_ID'],
      auth_uri: process.env['FIREBASE_AUTH_URI'],
      token_uri: process.env['FIREBASE_TOKEN_URI'],
      auth_provider_x509_cert_url: process.env['FIREBASE_AUTH_PROVIDER_CERT_URL'],
      client_x509_cert_url: process.env['FIREBASE_CLIENT_CERT_URL'],
    } as admin.ServiceAccount),
  });
}

const firestore = admin.firestore();
const adminAuth = admin.auth();

export { firestore, adminAuth };

