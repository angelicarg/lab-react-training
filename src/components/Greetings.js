function Greetings(props) {
  const lang = [{}];
  return (
    <div>
      <Greetings lang="{props.lang}">Ludwig</Greetings>
    </div>
  );
}

export default Greetings;
