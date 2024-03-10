import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
// const io = new Server(server);
const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

// Enable CORS
app.use(cors());

const PORT = process.env.PORT || 3000;

// Sample data structure to store documents
const documents = {};

io.on('connection', (socket) => {
  console.log('New user connected');

  // Listen for changes from the client
  socket.on('documentChange', (data) => {
    // Update the document data
    documents[data.docId] = data.content;

    // Broadcast the changes to all connected clients
    io.emit('documentChange', data);
  });

  // Listen for new document creation
  socket.on('createDocument', (docId) => {
    // Create a new document entry
    documents[docId] = '';

    // Broadcast the new document to all connected clients
    io.emit('createDocument', docId);
  });

  // Send initial document data when a client joins
  socket.on('getDocument', (docId) => {
    socket.emit('getDocument', { docId, content: documents[docId] });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
