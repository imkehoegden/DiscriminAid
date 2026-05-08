export default function DonationPage() {
  return (
    <div className="w-full ">
      <div className="w-full py-12 px-6 md:px-16">
        <h1 className="text-5xl text-center font-bold mb-12">Spenden!</h1>
      </div>

      <div className=" bg-orange-400 w-full py-14 px-4">
        <iframe
          src="https://bcause.com/embed/transaction/frc-309996941579960320"
          className="block w-full max-w-[600px] min-h-[800px] rounded-[20px] border-0 mx-auto"
          allow="payment"
          loading="eager"
          title="Donation Form"
        />
      </div>
    </div>
  );
}
