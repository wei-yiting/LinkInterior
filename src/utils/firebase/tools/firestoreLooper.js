export default function firebaseLooper(snapshot) {
  const data = [];
  snapshot.forEach((doc) => {
    data.push({
      ...doc.data(),
      id: doc.id,
    });
  });
  return data;
}
