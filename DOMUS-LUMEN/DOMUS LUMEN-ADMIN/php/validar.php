
<?php
// Este archivo no es funcional, es solamente una prueba de coomo podría ir, y como se conectaría a la base de datos
// Conexión a la base de datos (reemplaza con tus credenciales)
$servername = "nombre_servidor";
$username = "nombre_usuario_bd";
$password = "contraseña_bd";
$dbname = "nombre_bd";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar si la conexión fue exitosa
if ($conn->connect_error) {
    die("Error en la conexión: " . $conn->connect_error);
}

// Obtener los datos enviados desde el formulario
if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Consultar la base de datos para verificar las credenciales
    $sql = "SELECT * FROM usuarios WHERE nombre_usuario = '$username' AND contraseña = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        // El inicio de sesión fue exitoso, redirigir al usuario a su área privada o página principal
        header("Location: pagina_principal.php");
    } else {
        // Las credenciales son incorrectas, redirigir de vuelta al formulario de inicio de sesión con un mensaje de error
        header("Location: index.php?error=1");
    }
}

// Este archivo no es funcional, es solamente una prueba de coomo podría ir, y como se conectaría a la base de datos

$conn->close();
?>

