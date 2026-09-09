import Image from "next/image";
import vigilado from "@davivienda-pagos/assets/vigilado.png";

export function Footer() {
  return (
    <footer className="flex shrink-0 flex-col items-center justify-center bg-footer py-[14px]">
      <div className="mx-auto flex w-full flex-wrap items-center px-[15px] min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px]">
        <div className="mb-[10px] w-full min-[576px]:w-auto min-[576px]:pr-[20px] min-[768px]:mb-0 min-[768px]:pr-[50px]">
          <div className="w-[150px]">
            <Image
              src={vigilado}
              alt="vigilado"
              width={150}
              height={20}
              className="h-[20px] w-full"
            />
          </div>
        </div>
        <div>
          <p className="mb-[5px] text-white min-[768px]:hidden">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ff9393]"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ff9393]"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
          <p className="m-0 text-white">
            <b>Banco Davivienda S.A. todos los derechos reservados 2020</b>
          </p>
        </div>
      </div>
    </footer>
  );
}