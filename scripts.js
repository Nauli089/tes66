// Data jadwal
const scheduleData = {
    0: [
        { subject: "-", time: "-" },
        { subject: "-", time: "-" },
        { subject: "-", time: "-" },
    ],
    1: [
        { subject: "Produktif", time: "07:40 - 08:30" },
        { subject: "Bahasa Indonesia", time: "08:45 - 10:15" },
        { subject: "Produktif", time: "10:30 - 12:00" },
    ],
    2: [
        { subject: "Batik", time: "07:00 - 08:00" },
        { subject: "Pjok", time: "08:15 - 09:15" },
        { subject: "Bahasa Inggris", time: "09:30 - 10:30" },
        { subject: "Pkn", time: "10:45 - 11:45" },
        { subject: "Informatika", time: "12:00 - 13:00" },
    ],
    3: [
        { subject: "Bahasa Indonesia", time: "07:00 - 08:00" },
        { subject: "Produktif", time: "08:15 - 09:15" },
        { subject: "Seni Musik", time: "09:30 - 10:30" },
        { subject: "Bahasa Inggris", time: "10:45 - 11:45" },
        { subject: "Matematika", time: "12:00 - 13:00" }
    ],
    4: [
        { subject: "Produktif", time: "07:00 - 08:30" },
        { subject: "Bahasa Korea", time: "08:45 - 10:15" },
        { subject: "Pai", time: "10:30 - 12:00" },
        { subject: "Sejarah", time: "12:15 - 13:15" },
        { subject: "Matematika", time: "13:30 - 15:00" }
    ],
    5: [
        { subject: "Informatika", time: "07:00 - 08:30" },
        { subject: "Produktif", time: "08:45 - 10:15" }
    ],
    6: [
        { subject: "-", time: "-" },
        { subject: "-", time: "-" },
        { subject: "-", time: "-" },
        { subject: "-", time: "-" },
        { subject: "-", time: "-" }
    ]
};

// Data jadwal piket 
const dutyData = {
    0: [
        ["-"],
        ["-"],
        ["-", "12:00 - 14:00"],
        ["-", "14:00 - 16:00"],
        ["-", "16:00 - 18:00"],
        ["-", "18:00 - 20:00"],
        ["-", "20:00 - 22:00"],
        ["-", "22:00 - 00:00"]
    ],
    1: [
        ["shania", "08:00 - 10:00"],
        ["velisya", "10:00 - 12:00"],
        ["nova", "12:00 - 14:00"],
        ["ferdi", "14:00 - 16:00"],
        ["dila", "16:00 - 18:00"],
        ["fikri", "18:00 - 20:00"],
        ["delfi", "20:00 - 22:00"],
        ["rahayu", "22:00 - 00:00"],
    ],
    2: [
        ["latifa", "08:00 - 10:00"],
        ["dian", "10:00 - 12:00"],
        ["reisyah", "12:00 - 14:00"],
        ["raya", "14:00 - 16:00"],
        ["melda", "16:00 - 18:00"],
        ["chaerunisa", "18:00 - 20:00"],
        ["sofy", "20:00 - 22:00"],
        ["aulia", "22:00 - 00:00"],
        ["mumtahanah", "22:00 - 00:00"],
    ],
    3: [
        ["sekar", "08:00 - 10:00"],
        ["ria", "10:00 - 12:00"],
        ["hani", "12:00 - 14:00"],
        ["jenny", "14:00 - 16:00"],
        ["anggie", "16:00 - 18:00"],
        ["farel", "18:00 - 20:00"],
        ["bunga", "20:00 - 22:00"],
        ["salsa", "22:00 - 00:00"],
    ],
    4: [
        ["putri", "08:00 - 10:00"],
        ["maharani", "10:00 - 12:00"],
        ["bara", "12:00 - 14:00"],
        ["roby", "14:00 - 16:00"],
        ["zahwa", "16:00 - 18:00"],
        ["nadiera", "18:00 - 20:00"],
        ["wulida", "20:00 - 22:00"],
        ["zaki", "22:00 - 00:00"],
    ],
    5: [
        ["-", "08:00 - 10:00"],
        ["-", "10:00 - 12:00"],
        ["-", "12:00 - 14:00"],
        ["-", "14:00 - 16:00"],
        ["-", "16:00 - 18:00"],
        ["-", "18:00 - 20:00"],
        ["-", "20:00 - 22:00"],
        ["-","22:00 - 00:00"],
    ],
    6: [
        ["-", "08:00 - 10:00"],
        ["-", "10:00 - 12:00"],
        ["-", "12:00 - 14:00"],
        ["-", "14:00 - 16:00"],
        ["-", "16:00 - 18:00"],
        ["-", "18:00 - 20:00"],
        ["-", "20:00 - 22:00"],
        ["-","22:00 - 00:00"],
    ],
};


// Data jadwal guru
const teachersData = [
    ["Bu Ropiah", "7 Jam", "Produktif"],
    ["Pak Didik", "4 Jam", "Produktif"],
    ["Bu Rifatin", "4 Jam", "Sejarah & Pkn"],
    ["Bu Venny", "4 Jam", "B.indonesia"],
    ["Mrs.Rita", "4 Jam", "B.ingg"],
    ["Pak Hendrik", "4 Jam", "Ipas"],
    ["Bu Tri", "4 Jam", "Matematika"],
    ["Pak Sugianto", "4 Jam", "Informatika"]
];

// Mengisi tabel dengan data jadwal pelajaran
function populateScheduleTable() {
    const table = document.getElementById('schedule-table');
    const subjects = scheduleData[dayOfWeek] || [];
    table.innerHTML = `
        <tr>
            <th>Waktu</th>
            <th>Mata Pelajaran</th>
        </tr>
        ${subjects.map(subject => `
            <tr>
                <td>${subject.time}</td>
                <td>${subject.subject}</td>
            </tr>
        `).join('')}
    `;
}

// Mengisi tabel dengan data jadwal piket
function populateDutyTable() {
    const table = document.getElementById('duty-table');
    const duties = dutyData[dayOfWeek] || [];
    table.innerHTML = `
        <tr>
            <th>Nama Piket</th>
            <th>Waktu</th>
        </tr>
        ${duties.map(duty => `
            <tr>
                <td>${duty[0]}</td>
                <td>${duty[1]}</td>
            </tr>
        `).join('')}
    `;
}

// Mengisi tabel dengan data jadwal guru
function populateTeachersTable() {
    const table = document.getElementById('teachers-table');
    table.innerHTML = `
        <tr>
            <th>Nama Guru</th>
            <th>Waktu</th>
            <th>Mata Pelajaran</th>
        </tr>
        ${teachersData.map(teacher => `
            <tr>
                <td>${teacher[0]}</td>
                <td>${teacher[1]}</td>
                <td>${teacher[2]}</td>
            </tr>
        `).join('')}
    `;
}

// Fungsi untuk mendapatkan hari berikutnya
function getNextDay(day) {
    return (day + 1) % 7; // Menyambung hari-hari dalam seminggu
}

// Memanggil fungsi untuk mengisi tabel saat halaman dimuat
function updateData() {
    populateScheduleTable();
    populateDutyTable();
    populateTeachersTable();
}

// Menggunakan hari saat ini untuk menentukan jadwal yang akan ditampilkan
let dayOfWeek = new Date().getDay();
updateData();

// Fungsi untuk menampilkan jadwal hari berikutnya
function showNextDay() {
    dayOfWeek = getNextDay(dayOfWeek);
    updateData();
}
// Define the allowed password
const correctPassword = 'polan'; // Replace with your actual password

// Function to render the saved Uang Kas data from localStorage
function renderKasData() {
    const kasData = JSON.parse(localStorage.getItem('kasData')) || [];
    const table = document.getElementById('kas-table').getElementsByTagName('tbody')[0];
    table.innerHTML = ''; // Clear existing rows

    kasData.forEach((item, index) => {
        const newRow = table.insertRow();
        const nameCell = newRow.insertCell(0);
        const amountCell = newRow.insertCell(1);
        const actionsCell = newRow.insertCell(2);

        nameCell.textContent = item.nama;
        amountCell.textContent = `Rp ${parseInt(item.jumlah).toLocaleString()}`;

        // Create edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.style.display = 'none'; // Initially hidden
        editButton.addEventListener('click', () => editData(index));
        actionsCell.appendChild(editButton);

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.display = 'none'; // Initially hidden
        deleteButton.addEventListener('click', () => deleteData(index));
        actionsCell.appendChild(deleteButton);
    });

    // If logged in, show the edit and delete buttons
    if (document.getElementById('kas-form').getAttribute('data-logged-in') === 'true') {
        document.querySelectorAll('#kas-table button').forEach(button => {
            button.style.display = 'inline'; // Show buttons if logged in
        });
    }
}

// Function to handle editing data
function editData(index) {
    const kasData = JSON.parse(localStorage.getItem('kasData')) || [];
    const item = kasData[index];

    document.getElementById('nama').value = item.nama;
    document.getElementById('jumlah').value = item.jumlah;
    document.getElementById('kas-form').setAttribute('data-edit-index', index);
}

// Function to handle deleting data
function deleteData(index) {
    let kasData = JSON.parse(localStorage.getItem('kasData')) || [];
    kasData = kasData.filter((_, i) => i !== index);
    localStorage.setItem('kasData', JSON.stringify(kasData));

    renderKasData(); // Re-render the table with updated data
}

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    const password = document.getElementById('password').value;

    if (password === correctPassword) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('kas-form').style.display = 'block';
        document.getElementById('kas-form').setAttribute('data-logged-in', 'true'); // Mark as logged in
        renderKasData(); // Re-render to show edit/delete buttons
    } else {
        alert('Mau ngapain hayo?');
    }
});

document.getElementById('kas-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (document.getElementById('kas-form').getAttribute('data-logged-in') !== 'true') {
        alert('Anda harus login untuk menambahkan data.');
        return; 
    }

    const nama = document.getElementById('nama').value;
    const jumlah = document.getElementById('jumlah').value;
    const editIndex = document.getElementById('kas-form').getAttribute('data-edit-index');

    if (nama && jumlah) {
        const kasData = JSON.parse(localStorage.getItem('kasData')) || [];

        if (editIndex !== null) {
            kasData[editIndex] = { nama, jumlah }; // Update existing item
            document.getElementById('kas-form').removeAttribute('data-edit-index');
        } else {
            kasData.push({ nama, jumlah }); // Add new item
        }

        localStorage.setItem('kasData', JSON.stringify(kasData));

        renderKasData(); 
        document.getElementById('kas-form').reset();
    }
});

// Load saved data on page load
window.addEventListener('load', function() {
    // Initially hide the kas-form if not logged in
    if (document.getElementById('kas-form').getAttribute('data-logged-in') !== 'true') {
        document.getElementById('kas-form').style.display = 'none';
    }

    renderKasData();
});
function checkAndUpdateSchedule() {
    const now = new Date();
    const hours = now.getUTCHours() + 7; // Mengkonversi waktu ke WIB (UTC + 7)
    const minutes = now.getUTCMinutes();

    // Koreksi jika penambahan jam menyebabkan overflow lebih dari 24 jam
    const correctHours = hours >= 24 ? hours - 24 : hours;

    // Log waktu untuk debugging
    console.log(`Sekarang pukul: ${correctHours}:${minutes} WIB`);

    // Jika waktu saat ini melewati pukul 19:55 WIB, ubah ke hari berikutnya
    if (correctHours > 18 || (correctHours === 18 && minutes >= 10)) {
        console.log("Mengubah jadwal ke hari berikutnya...");
        dayOfWeek = getNextDay(dayOfWeek);
        updateData(); // Perbarui tabel dengan data untuk hari berikutnya
    }
}

// Fungsi ini akan dipanggil setiap menit untuk memeriksa waktu dan memperbarui jadwal jika perlu
setInterval(checkAndUpdateSchedule, 60000); // 60000ms = 1 menit

alert("Halo Selamat Datang")

function validateName() {
    // Daftar nama yang diizinkan
    const allowedNames = ["xpm3"];

    // Prompt untuk memasukkan nama
    let userName = prompt("Masukkan Sandi");

    // Cek apakah nama yang dimasukkan ada dalam daftar nama yang diizinkan
    if (userName && allowedNames.includes(userName.trim())) {
        alert("Nama Anda aneh");
        // Nama diterima, biarkan halaman tetap
    } else {
        alert("Nama tidak diizinkan. Anda akan diarahkan keluar.");
        // Arahkan pengguna ke halaman error Google
        window.location.href = "https://www.google.com/search?q=access+denied";
    }
}
document.getElementById('absenForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const tanggal = document.getElementById('tanggal').value;
    const status = document.getElementById('status').value;
    
    const message = `Absen berhasil dikirim!\nNama: ${nama}\nTanggal: ${tanggal}\nStatus: ${status}`;
    
    document.getElementById('message').innerText = message;
    
    // Anda bisa menambahkan kode untuk mengirim data ke server di sini
});
