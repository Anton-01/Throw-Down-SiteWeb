
/*const allExercises = [
            { genero: "Masculino", edad: 6, categoria: "Iniciación Deportiva", tipo: "Cardio", ejercicio: "Carrera suave", valor: "5 min", series: "1", intensidad: "Baja" },
            { genero: "Masculino", edad: 6, categoria: "Iniciación Deportiva", tipo: "Fuerza", ejercicio: "Sentadillas sin peso", valor: "5 rep", series: "2", intensidad: "Baja" },
            { genero: "Masculino", edad: 6, categoria: "Alto Rendimiento", tipo: "Cardio", ejercicio: "Sprint", valor: "10 seg", series: "3", intensidad: "Media" },

            { genero: "Femenino", edad: 8, categoria: "Iniciación Deportiva", tipo: "Flexibilidad", ejercicio: "Estiramiento de brazos", valor: "30 seg", series: "1", intensidad: "Baja" },
            { genero: "Femenino", edad: 8, categoria: "Alto Rendimiento", tipo: "Equilibrio", ejercicio: "Postura de árbol", valor: "30 seg", series: "2", intensidad: "Media" },

            { genero: "Masculino", edad: 18, categoria: "Iniciación Deportiva", tipo: "Cardio", ejercicio: "Elíptica", valor: "20 min", series: "1", intensidad: "Media" },
            { genero: "Masculino", edad: 18, categoria: "Alto Rendimiento", tipo: "Fuerza", ejercicio: "Press de banca", valor: "8 rep", series: "3", intensidad: "Alta" },
            { genero: "Masculino", edad: 18, categoria: "Alto Rendimiento", tipo: "Fuerza", ejercicio: "Peso muerto", valor: "5 rep", series: "3", intensidad: "Muy Alta" },

            { genero: "Femenino", edad: 18, categoria: "Iniciación Deportiva", tipo: "Cardio", ejercicio: "Bicicleta estática", valor: "15 min", series: "1", intensidad: "Media" },
            { genero: "Femenino", edad: 18, categoria: "Alto Rendimiento", tipo: "Fuerza", ejercicio: "Sentadilla con barra", valor: "10 rep", series: "3", intensidad: "Alta" },

            { genero: "Masculino", edad: 18, categoria: "Juniors", tipo: "Cardio", ejercicio: "Intervalos en pista", valor: "30 seg sprint / 60 seg trote", series: "5", intensidad: "Alta" },
            { genero: "Masculino", edad: 18, categoria: "Juniors", tipo: "Fuerza", ejercicio: "Dominadas", valor: "Máx rep", series: "3", intensidad: "Media" },
            { genero: "Femenino", edad: 18, categoria: "Juniors", tipo: "Cardio", ejercicio: "Zumba", valor: "45 min", series: "1", intensidad: "Media" },
            { genero: "Femenino", edad: 18, categoria: "Juniors", tipo: "Fuerza", ejercicio: "Plancha", valor: "60 seg", series: "3", intensidad: "Media" },

            { genero: "Masculino", edad: 18, categoria: "Abierta", tipo: "Fuerza", ejercicio: "Arrancada olímpica", valor: "3 rep", series: "5", intensidad: "Muy Alta" },
            { genero: "Masculino", edad: 18, categoria: "Abierta", tipo: "Cardio", ejercicio: "Maratón", valor: "42 km", series: "1", intensidad: "Muy Alta" },
            { genero: "Femenino", edad: 18, categoria: "Abierta", tipo: "Fuerza", ejercicio: "Cargada", valor: "5 rep", series: "4", intensidad: "Muy Alta" },
            { genero: "Femenino", edad: 18, categoria: "Abierta", tipo: "Cardio", ejercicio: "Triatlón", valor: "Distancia sprint", series: "1", intensidad: "Muy Alta" },


            { genero: "Masculino", edad: 30, categoria: "Iniciación Deportiva", tipo: "Cardio", ejercicio: "Caminata rápida", valor: "30 min", series: "1", intensidad: "Baja" },
            { genero: "Masculino", edad: 30, categoria: "Alto Rendimiento", tipo: "Fuerza", ejercicio: "Press militar", valor: "6 rep", series: "4", intensidad: "Alta" },

            { genero: "Femenino", edad: 30, categoria: "Iniciación Deportiva", tipo: "Flexibilidad", ejercicio: "Yoga suave", valor: "45 min", series: "1", intensidad: "Baja" },
            { genero: "Femenino", edad: 30, categoria: "Alto Rendimiento", tipo: "Cardio", ejercicio: "Correr distancias", valor: "10 km", series: "1", intensidad: "Alta" },

            { genero: "Masculino", edad: 50, categoria: "Iniciación Deportiva", tipo: "Equilibrio", ejercicio: "Levantar una pierna", valor: "30 seg", series: "2", intensidad: "Baja" },
            { genero: "Masculino", edad: 50, categoria: "Alto Rendimiento", tipo: "Fuerza", ejercicio: "Máquinas de gimnasio", valor: "12 rep", series: "3", intensidad: "Media" },

            { genero: "Femenino", edad: 50, categoria: "Iniciación Deportiva", tipo: "Cardio", ejercicio: "Natación suave", valor: "20 min", series: "1", intensidad: "Baja" },
            { genero: "Femenino", edad: 50, categoria: "Alto Rendimiento", tipo: "Flexibilidad", ejercicio: "Pilates", valor: "60 min", series: "1", intensidad: "Media" },
        ];

        const generoSelect = document.getElementById('genero');
        const edadSelect = document.getElementById('edad');
        const tipoEjercicioSelect = document.getElementById('tipoEjercicio');
        const categoriaAdicionalSelect = document.getElementById('categoriaAdicional');
        const additionalFiltersDiv = document.getElementById('additionalFilters');
        const resultsContainer = document.getElementById('resultsContainer');
        const iniciacionTableBody = document.getElementById('iniciacionTableBody');
        const altoRendimientoTableBody = document.getElementById('altoRendimientoTableBody');
        const noIniciacionData = document.getElementById('noIniciacionData');
        const noAltoRendimientoData = document.getElementById('noAltoRendimientoData');

        function clearResults() {
            iniciacionTableBody.innerHTML = '';
            altoRendimientoTableBody.innerHTML = '';
            resultsContainer.classList.add('hidden');
            additionalFiltersDiv.classList.add('hidden');
            noIniciacionData.classList.add('hidden');
            noAltoRendimientoData.classList.add('hidden');
            tipoEjercicioSelect.value = '';
            categoriaAdicionalSelect.innerHTML = '<option value="">Todas</option>';
        }

        function populateCategoriaAdicional(edad) {
            categoriaAdicionalSelect.innerHTML = '<option value="">Todas</option>';
            if (edad === 18) {
                const categories = ['Abierta', 'Juniors'];
                categories.forEach(cat => {
                    const option = document.createElement('option');
                    option.value = cat;
                    option.textContent = cat;
                    categoriaAdicionalSelect.appendChild(option);
                });
            }
        }

        function renderTables() {
            const selectedGenero = generoSelect.value;
            const selectedEdad = parseInt(edadSelect.value);
            const selectedTipoEjercicio = tipoEjercicioSelect.value;
            const selectedCategoriaAdicional = categoriaAdicionalSelect.value;

            if (!selectedGenero || isNaN(selectedEdad)) {
                clearResults();
                return;
            }

            clearResults();
            resultsContainer.classList.remove('hidden');
            additionalFiltersDiv.classList.remove('hidden');

            const filteredExercises = allExercises.filter(ej => {
                let matches = ej.genero === selectedGenero && ej.edad === selectedEdad;

                if (selectedTipoEjercicio && selectedTipoEjercicio !== '') {
                    matches = matches && ej.tipo === selectedTipoEjercicio;
                }

                if (selectedCategoriaAdicional && selectedCategoriaAdicional !== '') {
                    // Si se selecciona una categoría adicional, solo mostrar ejercicios de esa categoría.
                    // Si la edad no es 18, las categorías "Abierta" y "Juniors" no deberían aparecer de todas formas
                    // a menos que estén definidas en los datos. Para este caso, solo aplicamos el filtro si la edad es 18
                    // o si el ejercicio ya tiene esa categoría definida.
                    if (selectedEdad === 18) {
                         matches = matches && (ej.categoria === selectedCategoriaAdicional || (ej.categoria !== "Abierta" && ej.categoria !== "Juniors"));
                         // Si la categoría seleccionada es "Abierta" o "Juniors", solo mostramos esos.
                         // De lo contrario, si la categoría adicional es "Todas", mostramos todo lo que no sea Abierta/Juniors también.
                         if (selectedCategoriaAdicional === "Abierta" || selectedCategoriaAdicional === "Juniors") {
                            matches = matches && ej.categoria === selectedCategoriaAdicional;
                         } else { // Si "Todas" está seleccionada en el filtro adicional, mostramos todos los ejercicios para esa edad y género, incluyendo Abierta/Juniors si son apropiados.
                            // No necesitamos un filtro adicional aquí, ya que el filtro inicial de género/edad ya cubre esto.
                         }
                    } else { // Si la edad no es 18, la categoría adicional no debería aplicar (solo dejamos lo que no sea Abierta/Juniors)
                        matches = matches && (ej.categoria !== "Abierta" && ej.categoria !== "Juniors");
                    }
                } else {
                     // Si no se ha seleccionado ninguna categoría adicional específica (es decir, "Todas"),
                     // para la edad 18, debemos mostrar también los de "Abierta" y "Juniors".
                     // Para otras edades, seguimos mostrando solo los de "Iniciación Deportiva" y "Alto Rendimiento".
                     if (selectedEdad !== 18) {
                        matches = matches && (ej.categoria === "Iniciación Deportiva" || ej.categoria === "Alto Rendimiento");
                     }
                }

                return matches;
            });

            const iniciacionExercises = filteredExercises.filter(ej => ej.categoria === "Iniciación Deportiva");
            const altoRendimientoExercises = filteredExercises.filter(ej => ej.categoria === "Alto Rendimiento" || ej.categoria === "Abierta" || ej.categoria === "Juniors");

            function createRow(exercise, isAltoRendimiento = false) {
                const row = document.createElement('tr');
                row.className = 'hover:bg-gray-100';
                row.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${exercise.ejercicio}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${exercise.valor}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${exercise.series}</td>
                    ${isAltoRendimiento ? `<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${exercise.intensidad}</td>` : ''}
                `;
                return row;
            }

            if (iniciacionExercises.length > 0) {
                iniciacionExercises.forEach(ej => iniciacionTableBody.appendChild(createRow(ej)));
            } else {
                noIniciacionData.classList.remove('hidden');
            }

            if (altoRendimientoExercises.length > 0) {
                altoRendimientoExercises.forEach(ej => altoRendimientoTableBody.appendChild(createRow(ej, true)));
            } else {
                noAltoRendimientoData.classList.remove('hidden');
            }
        }

        // Event Listeners para los selectores principales
        generoSelect.addEventListener('change', () => {
            clearResults(); // Limpia los resultados al cambiar género
            if (generoSelect.value && edadSelect.value) {
                renderTables();
            }
        });
        edadSelect.addEventListener('change', () => {
            const selectedEdad = parseInt(edadSelect.value);
            populateCategoriaAdicional(selectedEdad);
            clearResults(); // Limpia los resultados al cambiar edad
            if (generoSelect.value && edadSelect.value) {
                renderTables();
            }
        });

        // Event Listeners para los filtros adicionales
        tipoEjercicioSelect.addEventListener('change', renderTables);
        categoriaAdicionalSelect.addEventListener('change', renderTables);

        // Inicializar la tabla si ya hay valores seleccionados (ej. si se refresca la página con valores preseleccionados)
        if (generoSelect.value && edadSelect.value) {
            populateCategoriaAdicional(parseInt(edadSelect.value));
            renderTables();
        }
            */
