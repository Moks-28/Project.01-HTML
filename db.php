<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "misaelmokansi15@email.com"; 
    $subject = "Pesan dari $name";
    $body = "Nama: $name\nEmail: $email\n\n$message";

    if (mail($to, $subject, $body)) {
        echo "Pesan berhasil terkirim!";
    } else {
        echo "Gagal mengirim pesan. Silakan coba lagi.";
    }
}
?>
