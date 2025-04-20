# Análisis del Informe de Sensibilidad

## 📋 Introducción

La Programación Lineal es una herramienta clave para optimizar funciones objetivo (m aximizar ganancias, minimizar costos) bajo restricciones lineales. El Análisis de Sensibilidad estudia la estabilidad de la solución frente a variaciones en los parámetros del modelo, especialmente en los recursos asignados en el lado derecho de las restricciones.

---

## 🔍 Componentes del Informe de Sensibilidad

Al ejecutar Solver en Excel (versiones 2010 en adelante), el Informe de Restricciones incluye tres elementos clave para cada restricción:

- **Valor Final (Final Value):**

  Refleja el valor del lado derecho de la restricción en la solución óptima.

- **Precio Sombra (Shadow Price):**

  Indica cuánto mejora o empeora el valor óptimo de la función objetivo por cada unidad que aumentamos o disminuimos el recurso limitado por dicha restricción.

- **Rangos Permitidos (Allowable Increase/Decrease):**

  Define el intervalo [Valor Final - Disminucion Permitida,Valor Final+Aumento Permitido] donde el Precio Sombra es válido. Fuera de este rango, la base óptima cambia y el Precio Sombra deja de ser confiable.

---

## 💡 Interpretación del Precio Sombra

El Precio Sombra de una restricción indica cuánto cambia el valor óptimo de la función objetivo por un incremento de una unidad en el recurso limitado por dicha restricción, manteniendo los demás parámetros constantes.

Este valor solo es aplicable si la variación del lado derecho se encuentra dentro del intervalo definido por el Valor Final más o menos el Allowable Increase/Decrease; fuera de ese rango, la base óptima cambia y el Precio Sombra deja de ser confiable.

---

## ✅ Aplicaciones en Toma de Decisiones

El Precio Sombra ayuda a determinar la rentabilidad marginal de aumentar o disminuir recursos y a identificar qué restricciones son críticas para la solución óptima.

---

## 📉 Limitaciones

- Solo aplica para cambios marginales dentro de los rangos permitidos.

- Asume que los coeficientes de la función objetivo y otras restricciones permanecen constantes.
