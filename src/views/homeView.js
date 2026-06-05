import Sidebar from "@/components/Sidebar";
import { getSession } from "@/utils";
import { homeController } from "@/controllers/home.controller";

export default function homeView() {
  const user = getSession();

  setTimeout(() => {
    homeController();
  });

  return `
    <div class="flex">

      ${Sidebar()}

      <main class="flex-1 p-6 bg-slate-100 min-h-screen">

        <div class="mb-6">

          <h1 class="text-3xl font-bold">
            Bienvenido, ${user?.name}
          </h1>

          <p class="text-slate-500">
            Rol: ${user?.role}
          </p>

        </div>

        ${
          user?.role === "admin"
            ? `
              <section
                class="bg-white p-5 rounded-lg shadow mb-6"
              >

                <h2 class="font-bold text-xl mb-2">
                  Panel Administrador
                </h2>

                <p>
                  Puedes visualizar todas las reservas.
                </p>

                <div class="mt-3">

                  <button
                    id="manageReservations"
                    class="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer"
                  >
                    Gestionar Reservas
                  </button>

                  <button
                    id="toggleForm"
                    class="ml-2 bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
                  >
                    Nueva Reserva
                  </button>

                </div>

              </section>
            `
            : `
              <section
                class="bg-white p-5 rounded-lg shadow mb-6"
              >

                <h2 class="font-bold text-xl mb-2">
                  Panel Usuario
                </h2>

                <p>
                  Puedes visualizar únicamente tus reservas.
                </p>

                <button
                  id="newReservationBtn"
                  class="mt-3 bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
                >
                  Nueva Reserva
                </button>

              </section>
            `
        }

        <section
          id="reservationsSection"
          class="bg-white p-5 rounded-lg shadow"
        >

          <div
            class="flex justify-between items-center mb-4"
          >

            <h2 class="font-bold text-xl">
              Reservas
            </h2>

            <span
              class="text-sm text-slate-500"
            >
              ${
                user?.role === "admin"
                  ? "Mostrando todas las reservas"
                  : "Mostrando únicamente tus reservas"
              }
            </span>

          </div>

          <div
            id="reservationsContainer"
            class="grid gap-4 md:grid-cols-2"
          >

            <div class="w-full text-center py-8 col-span-2">

              <p class="text-slate-500">
                Cargando reservas...
              </p>

            </div>

          </div>

        </section>

        <section
          id="reservationFormSection"
          class="bg-white p-5 rounded-lg shadow mt-6"
        >

          <h2 class="font-bold text-xl mb-4">
            Nueva Reserva
          </h2>

          <form id="reservationForm">

            <select
              id="workspace"
              class="border p-2 w-full mb-2"
            >

              <option
                value=""
                selected
                disabled
              >
                Selecciona un Espacio
              </option>

              <option>Sala A</option>
              <option>Sala B</option>
              <option>Sala C</option>

              <option>Oficina 1</option>
              <option>Oficina 2</option>
              <option>Oficina 3</option>

              <option>Coworking 1</option>
              <option>Coworking 2</option>
              <option>Coworking 3</option>

              <option>Auditorio 1</option>
              <option>Auditorio 2</option>
              <option>Auditorio 3</option>

            </select>

            <input
              id="date"
              type="date"
              class="border p-2 w-full mb-2"
            >

            <input
              id="startHour"
              type="time"
              class="border p-2 w-full mb-2"
            >

            <input
              id="endHour"
              type="time"
              class="border p-2 w-full mb-2"
            >

            <input
              id="reason"
              placeholder="Reason"
              class="border p-2 w-full mb-2"
            >

            <button
              type="submit"
              class="bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
            >
              Crear Reserva
            </button>

          </form>

        </section>

      </main>

    </div>
  `;
}