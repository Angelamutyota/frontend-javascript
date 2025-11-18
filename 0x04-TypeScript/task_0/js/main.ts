// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students with explicit types
const student1: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 22,
  location: 'Nairobi',
};

const student2: Student = {
  firstName: 'John',
  lastName: 'Smith',
  age: 25,
  location: 'Mombasa',
};

// Array of students
const studentsList: Student[] = [student1, student2];

/**
 * Create and return an HTMLTableElement that lists students' first names and locations
 */
function createStudentsTable(students: Student[]): HTMLTableElement {
  const table: HTMLTableElement = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.width = '50%';
  table.style.maxWidth = '600px';
  table.style.margin = '16px 0';

  // Header row
  const thead: HTMLTableSectionElement = document.createElement('thead');
  const headerRow: HTMLTableRowElement = document.createElement('tr');

  const thName: HTMLTableCellElement = document.createElement('th');
  thName.textContent = 'First Name';
  thName.style.border = '1px solid #ccc'; 
  thName.style.padding = '8px';
  thName.style.textAlign = 'left';

  const thLocation: HTMLTableCellElement = document.createElement('th');
  thLocation.textContent = 'Location';
  thLocation.style.border = '1px solid #ccc';
  thLocation.style.padding = '8px';
  thLocation.style.textAlign = 'left';

  headerRow.appendChild(thName);
  headerRow.appendChild(thLocation);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Body rows
  const tbody: HTMLTableSectionElement = document.createElement('tbody');
  for (const student of students) {
    const row: HTMLTableRowElement = document.createElement('tr');

    const tdName: HTMLTableCellElement = document.createElement('td');
    tdName.textContent = student.firstName;
    tdName.style.border = '1px solid #eee';
    tdName.style.padding = '8px';

    const tdLocation: HTMLTableCellElement = document.createElement('td');
    tdLocation.textContent = student.location;
    tdLocation.style.border = '1px solid #eee';
    tdLocation.style.padding = '8px';

    row.appendChild(tdName);
    row.appendChild(tdLocation);
    tbody.appendChild(row);
  }

  table.appendChild(tbody);
  return table;
}

// Wait for DOM and then attach the generated table
document.addEventListener('DOMContentLoaded', () => {
  const container: HTMLDivElement = document.createElement('div');
  const title: HTMLHeadingElement = document.createElement('h1');
  title.textContent = 'Students';
  title.style.fontFamily = 'Arial, sans-serif';
  title.style.fontSize = '20px';
  title.style.margin = '8px 0';

  container.appendChild(title);
  container.appendChild(createStudentsTable(studentsList));
  document.body.appendChild(container);
});
