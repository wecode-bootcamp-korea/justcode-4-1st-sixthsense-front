function BlackButton({ content, onClick }) {
  const styles = {
    margin: 'auto',
    border: 'none',
    borderRadius: 50,
    paddingTop: 10,
    paddingRight: 53,
    paddingBottom: 10,
    paddingLeft: 53,
    width: 'max-content',
    backgroundColor: 'black',
    color: 'whitesmoke',
  };

  return (
    <button style={styles} onClick={onClick}>
      {content}
    </button>
  );
}
export default BlackButton;
