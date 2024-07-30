import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AboutUs() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      id="about"
      sx={{
        pt: { xs: 4, sm: 8 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      {/* <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      > */}
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'center', md: 'center' },
        }}
      >
        About FLLC
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Accordion
          defaultExpanded
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="h5">
              About
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              At Fine Line Laser Cutting, we specialize in custom industrial laser cutting that caters to your exact specifications, turning your ideas into reality. 
              We&apos;re not just cutting metals; we&apos;re shaping possibilities. 
              Whether you&apos;re a designer, engineer, or manufacturer, our team is here to bring your vision to life.
              <br /><br />
              From prototypes to production runs, our lasers handle it all. Bring us your CAD files, sketches, or napkin drawings—we&apos;ll refine them for laser cutting.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="h3" variant="h5">
              Expertise
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
                Owner, David Valead is a seasoned Industrial Laser Engineer with an impressive 38 years of experience in the field. David&apos;s legacy is etched in the components he&apos;s cut, 
                and his passion for precision and innovation has driven him to excel in the industry. His expertise has led to cost savings, improved product quality, and streamlined production.
                <br/><br/>
                David knows the intricacies of laser parameters, beam quality, and focal lengths. He can optimize laser systems for maximum efficiency and precision and will tailor processes to suit specific applications.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="h5">
                Why Choose FLLC?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
                  Collaboration: We&apos;re not just a vendor; we&apos;re a partner. Your success is our success. 
                  We don&apos;t believe in one-size-fits-all. 
                  Your project is unique, and so are our solutions.
                  <br/><br/>
                  Design and Prototyping: Our team translates your vision into digital designs. We create prototypes to ensure perfection before production.
                  <br/><br/>
                  Materials Mastery: From stainless steel, mild steel to shim stock, and more, we understand the nuances and unique properties of each material, ensuring optimal cuts every time.
                  <br/><br/>
                  Precision and Quality: Our laser cutting process ensures clean, burr-free cuts and minimal kerf width, meeting the highest industry tolerance standards. 
                  We pay meticulous attention to detail to deliver optimum results. 
                  <br/><br/>
                  Speed and Efficiency: Deadlines matter. We pride ourselves on efficient turnaround times without compromising quality.
                  <br/><br/>
                  Metal Fabrication: Beyond cutting, we offer bending, welding, and finishing services.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography component="h3" variant="h5">
                Materials Mastery
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
                  Stainless Steel: From 304 to 316L, our lasers handle stainless steel alloys with precision. 
                  Whether it&apos;s a decorative panel or a functional component, we&apos;ve got you covered.
                  <br/><br/>
                  Titanium: Our lasers cut titanium with tight tolerances.
                  <br/><br/>
                  Exotic Alloys: Inconel, Hastelloy, Monel—our expertise extends to these challenging materials.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
