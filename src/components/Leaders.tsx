import Image from "next/image";

const Leaders = () => {
  return (
    <div className="mx-auto flex-row bg-gray-300 md:container">
      <div>
        <h1 className="text-5xl font-bold">Nomads Leadership</h1>
        <p className="mt-4 text-lg">
          Our club is dedicated to providing a welcoming and supportive
          environment <br /> for all cyclists, regardless of their skill level
          or backgroud.
        </p>
      </div>

      <div className="mt-10">
        <div className="max-w-sm overflow-hidden rounded bg-white shadow-lg">
          <div className="bg-blue-primary">
            <p className="text-lg">
              Our club is dedicated to providing a welcoming and supportive
              environment for all cyclists, regardless of their skill level or
              backgroud.
              <div>
                <h6>Lydia </h6>
                <p>Software engineer</p>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
