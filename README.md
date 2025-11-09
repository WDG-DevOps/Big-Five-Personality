## 🚀 Cara Menjalankan Aplikasi dengan Docker

Proyek ini menggunakan Docker Compose untuk menjalankan aplikasi Node.js dan *database* MySQL.

**Prasyarat:**

  * [Docker](https://www.docker.com/products/docker-desktop/)
  * [Git](https://git-scm.com/)

-----

### Langkah-langkah

1.  **Clone Repository Ini:**

    ```bash
    git clone https://github.com/WDG-DevOps/Big-Five-Personality.git
    cd Big-Five-Personality
    ```
    atau
    * **Siapkan File docker-compose.yml**

        Salin konten dari file docker-compose.yml di [Github](https://github.com/WDG-DevOps/Big-Five-Personality/blob/main/docker-compose.yml)

2.  **Buat File `.env`:**
    Salin file `.env.example` menjadi file `.env` baru.

    ```bash
    cp .env.example .env
    ```

    Buka file `.env` tersebut dan isi semua nilai yang kosong (terutama `GOOGLE_CLIENT_ID` dan `GOOGLE_CLIENT_SECRET`).

3.  **Jalankan Docker Compose:**
    Perintah ini akan secara otomatis mengunduh *image* aplikasi dari Docker Hub, mengunduh *image* MySQL, dan menjalankannya.

    ```bash
    docker-compose up -d
    ```

4.  **Buka Aplikasi:**
    Buka `http://localhost:6060` di *browser* Anda.

5.  **(Hanya Dijalankan Sekali) Inisialisasi Database:**
    Buka **Terminal/CMD baru** dan jalankan perintah berikut untuk membuat *database*, menjalankan migrasi skema tabel, dan mengisi data awal (*seeder*):

    ```bash
    docker-compose exec app npx sequelize-cli db:create
    docker-compose exec app npx sequelize-cli db:migrate
    docker-compose exec app npx sequelize-cli db:seed:all
    ```

6.  **(Wajib Dijalankan Setelah Migrasi & Seeder)** **Restart Aplikasi:**
    Setelah migrasi dan seeder selesai di **Terminal 2**, kembali ke **Terminal 1** (atau buka terminal baru jika Terminal 1 Anda sudah ditutup) dan jalankan perintah *restart* ini agar aplikasi Node.js membaca skema *database* yang baru:

    ```bash
    docker-compose restart app
    ```

    > **Catatan:** Jika Anda menjalankan ulang `docker-compose up -d` di kemudian hari, Anda **wajib** menjalankan `docker-compose restart app` ini lagi agar koneksi aplikasi ke *database* diperbarui.