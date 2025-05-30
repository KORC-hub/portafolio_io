# Modelos de Transporte y Asignación

Las empresas enfrentan frecuentemente el reto de asignar eficientemente sus recursos para minimizar costos y satisfacer la demanda del mercado.

En la investigación de operaciones, los modelos de transporte y asignación son herramientas clave para solucionar estos retos. Ambos pertenecen a la familia de modelos lineales y se resuelven con técnicas de programación lineal como el algoritmo simplex.

Antes de explicar cada modelo, se plantea el siguiente ejercicio y se resolvera con cada metodo para ver sus diferencias:

---

## Ejercicio:

Una empresa va a fabricar cuatro productos nuevos utilizando tres plantas que por el momento tienen exceso de capacidad de producción.

- Cada planta tiene una **capacidad diaria de producción**
- Cada producto tiene una **demanda diaria específica que debe ser satisfecha**.
- Cada planta puede producir cualquiera de estos productos, excepto **la planta 2 que no puede fabricar el producto 3.**

El **costo de producción** por unidad varía entre plantas y productos, como se ve en la siguiente imagen:

---

Con el ejercicio planteado, podemos abordar cada modelo y ver cómo cada uno aborda el problema y cual nos da la solución más eficiente

---

## Modelo de Transporte

Se aplica cuando se desea distribuir un producto desde múltiples **fuentes** (plantas, bodegas, etc.) hacia múltiples **destinos** (clientes, puntos de venta, etc.), con el objetivo de minimizar el costo total de transporte.

Además, existen variantes más complejas del modelo de transporte que incluyen **almacenes intermedios o puntos de transbordo**, donde los productos pueden pasar antes de llegar al destino final. Estos casos se conocen como **problemas de transbordo** y amplían la red de transporte

---

Cada fuente tiene una **oferta limitada**, y cada destino tiene una **demanda específica**. Además, se considera un **costo por unidad transportada** desde cada fuente a cada destino.

El ejercicio que presentamos en esta sección no es de transbordo por lo que es más fácil. En el siguiente gráfico podemos ver la oferta, demanda y costos del ejercicio:

---

En el ejercicio la función objetivo se expresa como una suma producto entre la **matriz de costos** (dada en el cuerpo de la tabla) unitarios y las variables de decisión, que representan cuántas unidades se deben fabricar en cada planta.

Como la oferta (195) es mayor que la demanda (120), no se utilizará toda la capacidad disponible, por lo tanto, algunas plantas producirán menos. Esto se refleja en las restricciones con "≤". A su vez, al estar obligados a cumplir con la demanda mínima, las restricciones de los productos son con "≥" o "=".

Al resolver el ejercicio con Solver da el siguiente resultado:

---

Dando como resultado un coste total de 3260.

---

## Modelo de asignación

Se utiliza para asignar un conjunto de recursos a un conjunto de tareas con una relación de **uno a uno**, por lo que no se permite dividir una tarea entre varios recursos. El objetivo es minimizar el costo total o maximizar la eficiencia de la asignación.

---

En este modelo es necesario construir una matriz binaria, donde cada celda indica la relación entre un recurso y una tarea. La matriz binaria está sujeta a un conjunto de restricciones en las filas y columnas, las cuales permiten una asignación válida y que Solver encuentre la combinación óptima que minimiza el costo total o maximiza la eficiencia.

En nuestro caso cada producto debe ser asignado a una sola planta (restricciones por columnas), y cada planta puede producir un número determinado de productos (restricciones por filas).

Aplicando lo mencionado anteriormente y con ayuda de Solver, se llegó al siguiente resultado:

---

Dando como resultado un coste total de 3290.

---

## Conclusiones

El método de transporte arroja una función objetivo menor ($3260), lo que representa un costo total más bajo en comparación con el método de asignación ($3290). No obstante, esta diferencia es relativamente pequeña si se considera que el modelo de transporte implica una mayor complejidad en cuanto a preparación, distribución y administración de la producción.

Por otro lado, el método de asignación distribuye los productos asignando uno o varios a una sola planta, lo cual simplifica significativamente los procesos operativos. Aunque el costo total es ligeramente superior, esta simplicidad puede generar beneficios indirectos en términos de eficiencia y gestión.

---

# Modelos PERT / CPM

Una vez que los recursos están asignados y las operaciones están listas para ejecutarse, es fundamental planificar y controlar el tiempo de ejecución de las actividades. Aquí entran en juego los modelos PERT (Program Evaluation and Review Technique) y CPM (Critical Path Method), desarrollados en los años 50 para la gestión de proyectos complejos.

---

## PERT

Es un modelo probabilístico, es decir, se utiliza cuando el tiempo de duración de las actividades no es conocido. Para ello, se estiman tres tiempos:

- Tiempo optimista (To): duración mínima posible.
- Tiempo más probable (Tm): duración que se espera que ocurra normalmente.
- Tiempo pesimista (Tp): duración máxima en caso de complicaciones.

---

## CPM

Es un modelo determinista, se aplica cuando los tiempos de ejecución y costos son conocidos con certeza. Este modelo permite además incorporar análisis de costos-tiempo para identificar cuánto costaría acelerar ciertas actividades.

---

Ambos modelos representan el proyecto mediante un grafo de red, donde:

- Los nodos representan eventos o puntos de control.
- Las aristas (flechas) representan las actividades del proyecto.
- Se identifican caminos críticos, es decir, las secuencias de actividades que determinan la duración total del proyecto.

## Ventajas de PERT/CPM

- Visualización clara del proyecto y sus dependencias.
- Identificación de actividades críticas, que no se pueden retrasar sin afectar la duración total.
- Ayudan a asignar recursos y tiempos de manera óptima.
- Permiten manejar actividades simultáneas y secuenciales con facilidad.
