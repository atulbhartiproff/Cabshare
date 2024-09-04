import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Typography from "@mui/joy/Typography";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";

export default function BottomActionsCard() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Mock data for additional details
  const additionalDetails = {
    destination: "MAA Airport",
    departureDate: "2024-12-01",
    departuretime: "08:00 PM",
    flightNumber: "AF1234",
    notes: "Looking for a cab buddy.",
  };

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
          // to make the card resizable
          overflow: "auto",
          resize: "horizontal",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        ></Box>
        <CardContent>
          <Typography level="title-lg">Test for now</Typography>
          <Typography level="body-sm">Well Hello there for now</Typography>
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
            width: "800px",
            backgroundColor: "background.body",
            borderRadius: "8px",
            p: 3,
            boxShadow: "md",
          }}
        >
          <Typography level="title-lg">Trip Details</Typography>
          <br></br>
          <Typography level="body-md">
            Destination: {additionalDetails.destination}
          </Typography>
          <Typography level="body-md">
            Departure Date: {additionalDetails.departureDate}
          </Typography>
          <Typography level="body-md">
            Departure Time: {additionalDetails.departuretime}
          </Typography>
          <Typography level="body-md">
            Flight Number: {additionalDetails.flightNumber}
          </Typography>
          <Typography level="body-md">
            Notes: {additionalDetails.notes}
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
