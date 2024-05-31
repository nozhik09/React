export const lionData = {
  name: "Alex",
  species: "Lion",
  role: "Main Character",
  skills: ["Roaring", "Hunting"],
  image:
    "https://img.freepik.com/free-photo/cute-lion-nature-outdoors_23-2150813253.jpg?t=st=1713338293~exp=1713341893~hmac=1439b73aedcfad1324b607543807963d7c5774877d4b0043b2cb55bd0bca565e&w=740",
};

export const zebraData = {
  name: "Marty",
  species: "Zebra",
  role: "Best Friend",
  skills: ["Running", "Joking"],
  image:
    "https://img.freepik.com/premium-photo/meet-adorable-3d-baby-zebra-with-big-expressive-eyes-that-will-melt-your-heart-this-cartoon-cr_1032785-4269.jpg?w=740",
};
export const normalizeData = (name) => {
    const normalizeName = name.toUpperCase();
    return normalizeName
  };
