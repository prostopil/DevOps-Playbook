function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show selected section
  document.getElementById(sectionId).classList.add('active');
  
  // Update active button
  document.querySelectorAll('nav button').forEach(button => {
    button.classList.remove('active');
  });
  const activeButton = document.querySelector(`button[onclick="showSection('${sectionId}')"]`);
  activeButton.classList.add('active');
}

function showGitSection(sectionId) {
  // Hide all git content sections
  document.querySelectorAll('.git-content').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show selected git content section
  document.getElementById(sectionId).classList.add('active');
  
  // Update active button
  document.querySelectorAll('.git-tab').forEach(button => {
    button.classList.remove('active');
  });
  const activeButton = document.querySelector(`button[onclick="showGitSection('${sectionId}')"]`);
  activeButton.classList.add('active');
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    // Could add a toast notification here
    console.log('Copied to clipboard');
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}

// Add tooltip functionality
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('mouseover', () => {
    btn.setAttribute('title', 'Копировать команду');
  });
});