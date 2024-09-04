import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Typography from "@mui/joy/Typography";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import TextField from "@mui/joy/TextField";
import Stack from "@mui/joy/Stack";

const initialTripData = [
  {
    id: 1,
    user: "User1",
    details: "Trip to New York",
    additionalDetails: {
      destination: "New York",
      departureDate: "2024-10-01",
      returnDate: "2024-10-07",
      flightNumber: "NY123",
      notes: "Looking for someone to share a ride.",
    },
  },
  {
    id: 2,
    user: "User2",
    details: "Trip to Tokyo",
    additionalDetails: {
      destination: "Tokyo",
      departureDate: "2024-11-15",
      returnDate: "2024-11-30",
      flightNumber: "TK456",
      notes: "Flexible on dates.",
    },
  },
];

function TripCard({ trip }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleViewClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          width: 320,
          overflow: "auto",
          resize: "horizontal",
          padding: "1rem",
          marginBottom: "1rem",
        }}
      >
        <CardContent>
          <Typography level="title-lg">{trip.user}</Typography>
          <Typography level="body-sm">{trip.details}</Typography>
        </CardContent>
        <CardActions buttonFlex="0 1 120px">
          <Button variant="outlined" color="neutral" onClick={handleViewClick}>
            View
          </Button>
          <Button variant="solid" color="primary">
            Join
          </Button>
        </CardActions>
      </Card>

      {/* Modal for additional trip details */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            width: "400px",
            backgroundColor: "background.body",
            borderRadius: "8px",
            p: 3,
            boxShadow: "md",
          }}
        >
          <Typography level="title-lg">Trip Details</Typography>
          <Typography level="body-md">
            Destination: {trip.additionalDetails.destination}
          </Typography>
          <Typography level="body-md">
            Departure Date: {trip.additionalDetails.departureDate}
          </Typography>
          <Typography level="body-md">
            Return Date: {trip.additionalDetails.returnDate}
          </Typography>
          <Typography level="body-md">
            Flight Number: {trip.additionalDetails.flightNumber}
          </Typography>
          <Typography level="body-md">
            Notes: {trip.additionalDetails.notes}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button variant="outlined" onClick={handleCloseModal}>
              Close
            </Button>
          </Box>
          <ModalClose onClick={handleCloseModal} />
        </Box>
      </Modal>
    </>
  );
}

export default function TripList() {
  const [tripData, setTripData] = React.useState(initialTripData);
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);
  const [newTrip, setNewTrip] = React.useState({
    user: "",
    details: "",
    additionalDetails: {
      destination: "",
      departureDate: "",
      returnDate: "",
      flightNumber: "",
      notes: "",
    },
  });

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleAddTripChange = (e) => {
    const { name, value } = e.target;
    setNewTrip((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTripData([...tripData, { ...newTrip, id: tripData.length + 1 }]);
    setNewTrip({
      user: "",
      details: "",
      additionalDetails: {
        destination: "",
        departureDate: "",
        returnDate: "",
        flightNumber: "",
        notes: "",
      },
    });
    handleCloseAddModal();
  };

  return (
    <Box sx={{ padding: "1rem" }}>
      <Button variant="solid" color="primary" onClick={handleOpenAddModal}>
        Add New Trip
      </Button>
      {tripData.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}

      {/* Modal for adding a new trip */}
      <Modal
        open={isAddModalOpen}
        onClose={handleCloseAddModal}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            width: "400px",
            backgroundColor: "background.body",
            borderRadius: "8px",
            p: 3,
            boxShadow: "md",
          }}
        >
          <Typography level="title-lg">Add New Trip</Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                name="user"
                label="User"
                value={newTrip.user}
                onChange={handleAddTripChange}
                fullWidth
              />
              <TextField
                name="details"
                label="Trip Details"
                value={newTrip.details}
                onChange={handleAddTripChange}
                fullWidth
              />
              <TextField
                name="additionalDetails.destination"
                label="Destination"
                value={newTrip.additionalDetails.destination}
                onChange={handleAddTripChange}
                fullWidth
              />
              <TextField
                name="additionalDetails.departureDate"
                label="Departure Date"
                type="date"
                value={newTrip.additionalDetails.departureDate}
                onChange={handleAddTripChange}
                fullWidth
              />
              <TextField
                name="additionalDetails.returnDate"
                label="Return Date"
                type="date"
                value={newTrip.additionalDetails.returnDate}
                onChange={handleAddTripChange}
                fullWidth
              />
              <TextField
                name="additionalDetails.flightNumber"
                label="Flight Number"
                value={newTrip.additionalDetails.flightNumber}
                onChange={handleAddTripChange}
                fullWidth
              />
              <TextField
                name="additionalDetails.notes"
                label="Notes"
                value={newTrip.additionalDetails.notes}
                onChange={handleAddTripChange}
                fullWidth
                multiline
                rows={4}
              />
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button type="submit" variant="solid" color="primary">
                  Add Trip
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleCloseAddModal}
                  sx={{ ml: 2 }}
                >
                  Cancel
                </Button>
              </Box>
            </Stack>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}
