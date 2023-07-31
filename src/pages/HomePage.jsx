const styles = {
  container: {
    minHeight: 'calc(100vh - 250px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 44,
    textAlign: 'center',
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        Welcome to the site of all data sorts. Please enjoy to using all the
        features of the site.
      </h2>
    </div>
  );
};

export default HomePage;
