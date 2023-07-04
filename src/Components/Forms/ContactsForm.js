import React from "react";
import {
  TextField,
  Box,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import { ContactsFormValidationSchema } from "./validation/ContactsFormValidationSchema";

const DEFAULT_VALUES = {
  reason: "",
  email: "",
  description: "",
};

export const ContactsForm = () => {
  const formik = useFormik({
    initialValues: DEFAULT_VALUES,
    enableReinitialize: true,
    isInitialValid: false,
    onSubmit: () => {},
    validationSchema: ContactsFormValidationSchema,
  });
  const [reason, setReason] = React.useState("");

  const reasonHandleChange = (event) => {
    setReason(event.target.value);
  };

  const { values, errors, touched, handleChange, handleBlur } = formik;

  return (
    <Box
      className="box-optimization"
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={630} // Adjust the box width
      height={500} // Adjust the box height
      boxShadow={3} // Adjust the shadow intensity (0 to 24)
      p={4} // Adjust the padding
    >
      <h1 className="text-color-contact serious-contact-box ">
        YOU CAN CONTACT US USING THIS FORM
      </h1>
      <form className="form-contact">
        <Box mb={2}>
          <TextField
            className="text serious p-about text-color-about underline-about"
            type="email"
            id="email"
            variant="outlined"
            label="Email"
            fullWidth
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && !!errors.email}
            helperText={touched.email ? errors.email : " "}
            FormHelperTextProps={{ children: null }}
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#D3B383", // Update the border color when focused
                },
              "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#D3B383", // Update the border color on hover
                },
              "& .MuiOutlinedInput-input": {
                color: "#D3B383", // Update the text color
              },
              "& .MuiInputLabel-root": {
                color: "#D3B383", // Update the label color
              },
              "& .MuiInputLabel-root:hover": {
                color: "#D3B383", // Update the label color
              },
            }}
          />
        </Box>
        <Box mb={2}>
          <FormControl fullWidth>
            <InputLabel id="reason-label">Reason</InputLabel>
            <Select
  labelId="reason-label"
  id="reason"
  value={reason}
  onChange={reasonHandleChange}
  onBlur={handleBlur}
  error={touched.reason && !!errors.reason}
  label="Reason"
  sx={{
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#D3B383", // Update the border color
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#D3B383", // Update the border color on hover
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#D3B383", // Update the border color when focused
                },
              "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#D3B383", // Update the border color on hover
                },
              "& .MuiOutlinedInput-input": {
                color: "#D3B383", // Update the text color
              },
              "& .MuiInputLabel-root": {
                color: "#D3B383", // Update the label color
              },
              "& .MuiInputLabel-root:hover": {
                color: "#D3B383", // Update the label color
              },
  }}
>
              <MenuItem value="">Select Reason</MenuItem>
              <MenuItem value="reason1">Request for a Quote</MenuItem>
              <MenuItem value="reason2">Project Inquiry</MenuItem>
              <MenuItem value="reason3">Contract Proposal</MenuItem>
              <MenuItem value="reason4">Change Order Request</MenuItem>
              <MenuItem value="reason5">Complaint or Issue Resolution</MenuItem>
              <MenuItem value="reason6">Payment Dispute</MenuItem>
              <MenuItem value="reason7">
                Project Completion Confirmation
              </MenuItem>
              <MenuItem value="reason8">Request for Documentation</MenuItem>
              <MenuItem value="reason9">
                Request for Warranty or Maintenance
              </MenuItem>
              <MenuItem value="reason10">
                Appreciation or Recommendation
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box mb={2}>
          <TextField
            className="text serious p-about text-color-about underline-about"
            type="search"
            id="description"
            variant="outlined"
            label="Description"
            fullWidth
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.description && !!errors.description}
            helperText={touched.description ? errors.description : " "}
            FormHelperTextProps={{ children: null }}
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#D3B383", // Update the border color when focused
              },
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#D3B383", // Update the border color on hover
              },
            "& .MuiOutlinedInput-input": {
              color: "#D3B383", // Update the text color
            },
            "& .MuiInputLabel-root": {
              color: "#D3B383", // Update the label color
            },
            "& .MuiInputLabel-root:hover": {
              color: "#D3B383", // Update the label color
            },
            }}
          />
        </Box>
        <Button
          variant="outlined"
          sx={{
            color: "gray",
            borderColor: "gray",
            backgroundColor: "#8C5032",
            "&:hover": {
              borderColor: "#8C5032",
              backgroundColor: "#D3B383",
              color: "#8C5032",
            },
          }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};
