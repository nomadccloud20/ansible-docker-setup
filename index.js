// Ansible Docker Setup Demo - JavaScript logic
// Simulates Ansible playbook execution for Docker setup

function executePlaybook() {
  // Validate form inputs
  const host = document.getElementById('host').value.trim();
  const services = Array.from(document.getElementById('services').selectedOptions).map(opt => opt.value);
  if (!host || services.length === 0) {
    alert('Please enter host IP and select at least one service.');
    return;
  }

  // Simulate Ansible output based on inputs
  const output = `TASK [Install Docker on ${host}] *********************************************************\n`;
  output += `ok: [${host}]\n`;
  output += `\nTASK [Start Docker service] *************************************************************\n`;
  output += `changed: [${host}]\n`;
  output += `\n`;

  services.forEach(service => {
    output += `TASK [Deploy ${service} container] *********************************************************\n`;
    output += `changed: [${host}] => {"container_id": "abc123"}\n`;
    output += `\n`;
  });

  output += `PLAY RECAP *********************************************************************\n`;
  output += `${host}                  : ok=3    changed=2    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0\n`;
  output += `\nPlaybook executed successfully!\n`;

  // Display output
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = output;
  outputDiv.style.display = 'block';
}