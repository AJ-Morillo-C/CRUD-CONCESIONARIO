-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-05-2024 a las 18:59:39
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `concesionario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `ID_cliente` int(11) NOT NULL,
  `Nombre_cliente` varchar(50) NOT NULL,
  `Apellido_cliente` varchar(50) NOT NULL,
  `Cedula` varchar(8) NOT NULL,
  `Direccion` varchar(255) NOT NULL,
  `Telefono_cliente` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`ID_cliente`, `Nombre_cliente`, `Apellido_cliente`, `Cedula`, `Direccion`, `Telefono_cliente`) VALUES
(1, 'Juan', 'Perez', '12345678', 'Calle Principal, #123', '0412-3456789'),
(2, 'Juan', 'Bolivar', '12345678', 'Campo alegre', '04267184871'),
(3, 'Petra', 'Acosta', '15915678', 'Calle El Sol', '04267184871');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `ID_empleado` int(11) NOT NULL,
  `Nombre_empleado` varchar(50) NOT NULL,
  `Apellido_empleado` varchar(50) NOT NULL,
  `Cargo` varchar(50) NOT NULL,
  `Telefono_empleado` varchar(20) NOT NULL,
  `Salario` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`ID_empleado`, `Nombre_empleado`, `Apellido_empleado`, `Cargo`, `Telefono_empleado`, `Salario`) VALUES
(1, 'Maria', 'Garcia', 'Vendedor', '0412-8765432', 1500.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcas`
--

CREATE TABLE `marcas` (
  `ID_marca` int(11) NOT NULL,
  `Marca` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `marcas`
--

INSERT INTO `marcas` (`ID_marca`, `Marca`) VALUES
(4, 'Chevrolet'),
(3, 'Jeep'),
(2, 'Ford'),
(1, 'Toyota');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modelos`
--

CREATE TABLE `modelos` (
  `ID_modelo` int(11) NOT NULL,
  `ID_marca` int(11) NOT NULL,
  `Modelo` int(11) NOT NULL,
  `Ano_fabricacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `modelos`
--

INSERT INTO `modelos` (`ID_modelo`, `ID_marca`, `Modelo`, `Ano_fabricacion`) VALUES
(1, 1, 0, 2023);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculos`
--

CREATE TABLE `vehiculos` (
  `ID_vehiculo` int(11) NOT NULL,
  `Matricula` varchar(20) NOT NULL,
  `ID_modelo` int(11) NOT NULL,
  `Color` varchar(20) NOT NULL,
  `Kilometraje` int(11) NOT NULL,
  `Estado` enum('disponible','vendido','reservado') NOT NULL,
  `Precio_venta` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `vehiculos`
--

INSERT INTO `vehiculos` (`ID_vehiculo`, `Matricula`, `ID_modelo`, `Color`, `Kilometraje`, `Estado`, `Precio_venta`) VALUES
(1, 'ABC123', 1, 'Blanco', 5000, 'disponible', 25000.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `ID_venta` int(11) NOT NULL,
  `ID_cliente` int(11) NOT NULL,
  `ID_vehiculo` int(11) NOT NULL,
  `ID_empleado` int(11) NOT NULL,
  `Fecha_venta` date NOT NULL,
  `Forma_pago` enum('efectivo','tarjeta','financiacion') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`ID_venta`, `ID_cliente`, `ID_vehiculo`, `ID_empleado`, `Fecha_venta`, `Forma_pago`) VALUES
(1, 1, 1, 1, '2024-05-14', 'efectivo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`ID_cliente`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`ID_empleado`);

--
-- Indices de la tabla `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`ID_marca`),
  ADD UNIQUE KEY `Marca` (`Marca`);

--
-- Indices de la tabla `modelos`
--
ALTER TABLE `modelos`
  ADD PRIMARY KEY (`ID_modelo`),
  ADD KEY `ID_marca` (`ID_marca`);

--
-- Indices de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD PRIMARY KEY (`ID_vehiculo`),
  ADD UNIQUE KEY `Matricula` (`Matricula`),
  ADD KEY `ID_modelo` (`ID_modelo`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`ID_venta`),
  ADD KEY `ID_cliente` (`ID_cliente`),
  ADD KEY `ID_vehiculo` (`ID_vehiculo`),
  ADD KEY `ID_empleado` (`ID_empleado`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `ID_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `ID_empleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `marcas`
--
ALTER TABLE `marcas`
  MODIFY `ID_marca` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `modelos`
--
ALTER TABLE `modelos`
  MODIFY `ID_modelo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  MODIFY `ID_vehiculo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `ID_venta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `modelos`
--
ALTER TABLE `modelos`
  ADD CONSTRAINT `modelos_ibfk_1` FOREIGN KEY (`ID_marca`) REFERENCES `marcas` (`ID_marca`);

--
-- Filtros para la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD CONSTRAINT `vehiculos_ibfk_1` FOREIGN KEY (`ID_modelo`) REFERENCES `modelos` (`ID_modelo`);

--
-- Filtros para la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`ID_cliente`) REFERENCES `clientes` (`ID_cliente`),
  ADD CONSTRAINT `ventas_ibfk_2` FOREIGN KEY (`ID_vehiculo`) REFERENCES `vehiculos` (`ID_vehiculo`),
  ADD CONSTRAINT `ventas_ibfk_3` FOREIGN KEY (`ID_empleado`) REFERENCES `empleados` (`ID_empleado`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
