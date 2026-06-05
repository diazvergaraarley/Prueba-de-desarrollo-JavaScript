import { getSession } from "@/utils";

export default function ReservationCard(reservation) {

  const user = getSession();

  const {
    name,
    id,
    workspace,
    date,
    startHour,
    endHour,
    reason,
    status
  } = reservation;

  return `
    <article
      class="bg-white p-4 rounded-lg shadow border"
    >

      <h3 class="font-bold text-lg">
        ${workspace}
      </h3>

      <div class="mt-2 text-sm">
        <p>
        Solicitante: Usuario ${''}
        </p>

        <p>
          Fecha: ${date}
        </p>

        <p>
          Horario:
          ${startHour}
          -
          ${endHour}
        </p>

        <p>
          Motivo:
          ${reason}
        </p>

        <p>
          Estado:
          <span class="
            ${
              status === "approved"
                ? "text-green-600"
                : status === "rejected"
                ? "text-red-600"
                : "text-yellow-600"
            }
            font-semibold
          ">
            ${status}
          </span>
        </p>

        <div class="flex flex-wrap gap-2 mt-3">

          ${
            user.role === "admin"
              ? `
                <button
                  class="approve-btn bg-green-600 text-white px-3 py-1 rounded cursor-pointer"
                  data-id="${id}"
                >
                  Aprobar
                </button>

                <button
                  class="reject-btn bg-yellow-600 text-white px-3 py-1 rounded cursor-pointer"
                  data-id="${id}"
                >
                  Rechazar
                </button>
              `
              : ""
          }

          <button
            class="delete-btn bg-red-600 text-white px-3 py-1 rounded cursor-pointer"
            data-id="${id}"
          >
            Eliminar
          </button>

        </div>

      </div>

    </article>
  `;
}