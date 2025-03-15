**Paso 1**: Preparamos ecuaciones

Para cada restricción:

- ( <= ) agregamos variable de holgura ( +Sn )
- ( >= ) Restamos variable de holgura y agregamos una artificial ( -Sn + An )
- ( = ) Agregamos variable artificial ( +An )

---

**Paso 2**: Preparamos función objetivo

Para Minimizar:

- Valor +M por cada variable artificial ( +MAn )
  Para Maximizar:

Para Maximizar:
- Valor -M para cada variable artificial ( -MAn )

En ambos:
- Valor +0 por cada variable holgura ( +0Sn )

---

**Paso 3**: Tabulación inicial de la información

- Variables básicas: son las que tienen valores => 0
- R: recursos especificados en cada restricción
- Cj: coeficientes de la función objetivo
- Zj: sumatoria de Cj \* aij
- Criterio simple: Cj - Zj determina cuando se termina el algoritmo

---

**Paso 4**: Columna pivote

- Minimizar: Se selecciona la columna donde esté ubicado el coeficiente más negativo en la fila del criterio simplex.
- Maximizar: Se selecciona la columna donde esté ubicado el coeficiente más positivo en la fila del criterio simplex.

---

**Paso 5**: Fila pivote

- Se divide el recurso ( R ) valor entre los elementos de la columna pivote. Se selecciona la fila que obtenga el menor resultado ( no participan los valores ceros o negativos ).

---

**Paso 6**: Cálculo

- Volvemos el elemento pivote uno ( 1 ) dividiendo o multiplicando la fila por una constante
- Volvemos 0 todos los elementos de la columna pivote que están por arriba o por debajo del elemento pivote, mediante la suma o resta de la fila pivote.
- Volvemos a calcular el criterio simplex

---

**Paso 7**: Criterio Simplex

- Maximizar = Cj - Zj <= 0
  Si hay números positivos - Aplicamos de nuevo el paso 4, 5 y 6

- Minimizar = Cj - Zj => 0
  Si hay números negativos - Aplicamos de nuevo el paso 4, 5 y 6

Estos pasos (4, 5, 6) se repiten hasta que el paso 7 (criterio simplex) se cumpla.

---


