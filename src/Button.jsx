export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2} >
      <Button variant="contained" className="contained-button">Contained</Button>
      <Button variant="contained" className="disabled-button" disabled>
        Disabled
      </Button>
      <Button variant="contained" className="link-button" href="#contained-buttons">
        Link
      </Button>
    </Stack>
  );
}