# Algoritmo Simplex y Analisis de Sensibilidad

## Algoritmo simplex

Tal como se mencionó en la sección del [Método Simplex](https://portafolio-io-weld.vercel.app/unit1/lineal-programming), este es un algoritmo utilizado para resolver problemas de programación lineal, en los que se busca la solución óptima que cumpla ciertas restricciones. Además, vimos que se trata de un procedimiento iterativo basado en el álgebra matricial y en el método de eliminación de Gauss-Jordan. Gracias a esto, resulta altamente eficiente para resolver problemas de gran tamaño y complejidad. En la actualidad, el algoritmo Simplex se encuentra implementado en numerosos paquetes de software que facilitan el proceso de cálculo, como por ejemplo Microsoft Excel con la herramienta Solver

En esta entrada, utilizare Solver para abordar un problema lineal sencillo no solo para encontrar la solución óptima, sino también obtener información valiosa sobre el comportamiento del modelo ante cambios en los parámetros, o tambien conocido como dualidad y precio sombra

---

## Ejercicio

Una carpintería fabrica mesas y sillas, obteniendo una ganancia de 40 dólares por cada mesa y 18 dólares por cada silla. La empresa desea maximizar sus ganancias, pero cuenta con recursos limitados: solo dispone de 640 unidades de madera y 560 horas de trabajo. Cada mesa consume 16 unidades de madera y 6 horas de trabajo, mientras que cada silla requiere 2 unidades de madera y 3 horas de trabajo. Además, por capacidad del taller, no se pueden producir más de 80 mesas ni más de 120 sillas por semana. El objetivo es determinar cuántas mesas y sillas deben fabricarse para obtener la máxima ganancia posible sin superar los recursos disponibles.

---

Planteando el ejercicio y resolviendolo con solver tendriamos lo siguiente resultado

---

### Variables

---

### Funcion objetivo: Maximizar:

---

### Restricciones:

---

La solución óptima es producir 25 mesas y 120 sillas, lo cual permite aprovechar al máximo los recursos disponibles y obtener una ganancia máxima de 3,160 dólares.

---

## Analisis de Sensibilidad

Conocer la solución óptima es útil, pero tambien es valioso saber cómo reaccionaría esa solución ante cambios en los recursos o beneficios. El análisis de sensibilidad cumple esta función, y Solver de Excel nos permite generar un reporte automático con indicadores clave como el precio sombra.

---

El precio sombra indica cuánto cambiaría la ganancia total si aumentamos en una unidad el lado derecho de una restricción

Por ejemplo:

- La restricción de madera tiene un precio sombra de 2.5, lo que significa que si se tuviera una unidad adicional de madera, la ganancia aumentaría en 2.5 dólares, hasta un máximo de 133.33 unidades más.

- La restricción de sillas tiene un precio sombra de 13, por lo tanto, si fuera posible producir una silla adicional (es decir, aumentar ese límite de 120 a 121), la ganancia crecería en 13 dólares, hasta un máximo de 22 unidades más.

Por otro lado, la restricción de trabajo tiene un precio sombra de 0, lo que indica que aumentar o reducir el trabajo disponible no tiene impacto en la ganancia, dentro del rango permitido (de 510 hasta 610 unidades de trabajo).

---

¿Conviene conseguir más madera si eso implica un costo adicional?
