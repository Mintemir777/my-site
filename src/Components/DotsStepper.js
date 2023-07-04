import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { steps } from './Steps';

export default function DotsMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const { label, content } = steps[activeStep];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <React.Fragment>
      <Typography variant="body3" className="text serious p-about">
        {content}
      </Typography>
      <div style={{ margin: '0 auto' }}>
        <MobileStepper
            className='stepper-center'
          variant="dots"
          steps={6}
          position="static"
          activeStep={activeStep}
          sx={{
            maxWidth: 400,
            flexGrow: 1,
            background: '#253f5b',
            '& .MuiMobileStepper-dotActive': {
              backgroundColor: '#C5A980',
            },
          }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === 5}
              sx={{
                background: 'rgb(37, 63, 91)',
                color: '#C5A980',
              }}
            >
              Next
              {theme.direction === 'rtl' ? ` ` : ` `}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{
                background: 'rgb(37, 63, 91)',
                color: '#C5A980',
              }}
            >
              {theme.direction === 'rtl' ? ` ` : ` `}
              Back
            </Button>
          }
        />
      </div>
    </React.Fragment>
  );
}
