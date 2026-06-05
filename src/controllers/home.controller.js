import ReservationCard from "@components/ReservationCard";
import { getReservations, deleteReservation, updateReservation, createReservation } from "@services/reservation.service";
import { getSession } from "@/utils";


export const homeController = async () => {
  const container = document.querySelector("#reservationsContainer");

  const user = getSession();

  const reservations = await getReservations();

  const filteredReservations =
    user.role === "admin"
      ? reservations
      : reservations.filter((reservation) => reservation.userId === user.id);

  container.innerHTML = filteredReservations?.length
    ? filteredReservations
        .map((reservation) => ReservationCard(reservation))
        .join("")
    : `
      <div class="w-full text-center py-8 col-span-2">
        <p class="text-slate-500">
          No hay reservas disponibles
        </p>
      </div>
    `;
    const form =
  document.querySelector("#reservationForm");

  form?.addEventListener(
  "submit",
  async (event) => {

    event.preventDefault();

    const workspace =
      document.querySelector("#workspace").value;

    const date =
      document.querySelector("#date").value;

    const startHour =
      document.querySelector("#startHour").value;

    const endHour =
      document.querySelector("#endHour").value;

    const reason =
      document.querySelector("#reason").value;

    const newReservation = {
      userId: user.id,
      workspace,
      date,
      startHour,
      endHour,
      reason,
      status: "pending"
    };

    await createReservation(
      newReservation
    );

    location.reload();

  }
);


    container.addEventListener(
  "click",
  async (event) => {

    if (
      event.target.classList.contains(
        "delete-btn"
      )
    ) {

      const id =
        event.target.dataset.id;

      await deleteReservation(id);

      location.reload();

    }
    
    if (
  event.target.classList.contains(
    "approve-btn"
  )
) {

  const id =
    event.target.dataset.id;

  await updateReservation(
    id,
    {
      status: "approved"
    }
  );

  location.reload();
}
if (
  event.target.classList.contains(
    "reject-btn"
  )
) {

  const id =
    event.target.dataset.id;

  await updateReservation(
    id,
    {
      status: "rejected"
    }
  );

  location.reload();
}

      }
);
const manageBtn =
  document.querySelector(
    "#manageReservations"
  );

const reservationsSection =
  document.querySelector(
    "#reservationsSection"
  );

manageBtn?.addEventListener(
  "click",
  () => {

    reservationsSection.classList.toggle(
      "hidden"
    );

    if (
      !reservationsSection.classList.contains(
        "hidden"
      )
    ) {
      reservationsSection.scrollIntoView({
        behavior: "smooth"
      });
    }

  }
);

const formBtn =
  document.querySelector(
    "#toggleForm"
  );

const formSection =
  document.querySelector(
    "#reservationFormSection"
  );

formBtn?.addEventListener(
  "click",
  () => {

    formSection.classList.toggle(
      "hidden"
    );

    if (
      !formSection.classList.contains(
        "hidden"
      )
    ) {
      formSection.scrollIntoView({
        behavior: "smooth"
      });
    }

  }
);

const newReservationBtn =
  document.querySelector("#newReservationBtn");

const reservationForm =
  document.querySelector("#reservationForm");

newReservationBtn?.addEventListener(
  "click",
  () => {

    reservationForm.scrollIntoView({
      behavior: "smooth"
    });

  }
);

}

