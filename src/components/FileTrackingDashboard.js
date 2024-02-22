import React, { useState } from 'react';
import styled from 'styled-components';


// Styled components for the dashboard
const DashboardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const FileList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FileItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FileName = styled.span`
  font-weight: bold;
`;

const FileStatus = styled.span`
  color: ${({ status }) => (status === 'pending' ? 'orange' : status === 'approved' ? 'green' : 'red')};
`;

const FilterButton = styled.button`
  margin-right: 10px;
`;

const FileTrackingDashboard = () => {
  // Example data for file tracking
  const [files, setFiles] = useState([
    { id: 1, name: 'File 1', status: 'pending' },
    { id: 2, name: 'File 2', status: 'approved' },
    { id: 3, name: 'File 3', status: 'rejected' },
  ]);
  const [filter, setFilter] = useState('all');


  // Filter files based on status
  const filterFiles = (status) => {
    if (status === 'all') {
      return files;
    } else {
      return files.filter(file => file.status === status);
    }
  };

  // Update file status
  const updateFileStatus = (id, newStatus) => {
    const updatedFiles = files.map(file => {
      if (file.id === id) {
        return { ...file, status: newStatus };
      }
      return file;
    });
    setFiles(updatedFiles);
  };

  return (
    <DashboardContainer>
      <h1>File Tracking Dashboard</h1>
      <div>
        <FilterButton onClick={() => setFilter('all')}>All</FilterButton>
        <FilterButton onClick={() => setFilter('pending')}>Pending</FilterButton>
        <FilterButton onClick={() => setFilter('approved')}>Approved</FilterButton>
        <FilterButton onClick={() => setFilter('rejected')}>Rejected</FilterButton>
      </div>
      <FileList>
        {filterFiles(filter).map(file => (
          <FileItem key={file.id}>
            <FileName>{file.name}</FileName> - Status: <FileStatus status={file.status}>{file.status}</FileStatus>
            <div>
              <button onClick={() => updateFileStatus(file.id, 'pending')}>Mark as Pending</button>
              <button onClick={() => updateFileStatus(file.id, 'approved')}>Mark as Approved</button>
              <button onClick={() => updateFileStatus(file.id, 'rejected')}>Mark as Rejected</button>
            </div>
          </FileItem>
        ))}
      </FileList>
    </DashboardContainer>
  );
};

export default FileTrackingDashboard;
