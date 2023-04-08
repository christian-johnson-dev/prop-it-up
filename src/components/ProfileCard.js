function ProfileCard({ person }) {
  return (
    <div className="card">
      <h2>
        {person.lastName}, {person.firstName}
      </h2>
      <p>Age: {person.age}</p>
      <p>Hair Color: {person.hairColor}</p>
    </div>
  );
}

export default ProfileCard;
