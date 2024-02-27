import nodemailer from "nodemailer";

const onSubmit = () => {
  sendContactEmail(emailForm);
};

export async function sendContactEmail(emailForm: EmailData) {
  // Nextjs app 폴더 내 api로 post 요청
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(emailForm),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "서버 요청에 실패함");
  }

  return data;
}

export type EmailData = {
  from: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  // 아래 secure 옵션을 사용하려면 465 포트를 사용해야함
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    // 초기에 설정해둔 env 데이터
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function sendEmail({ from, subject, message }: EmailData) {
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `[BLOG] ${subject}`,
    from: from,
    //	html 옵션 또는 text 옵션 둘중 하나만 사용해야함
    html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    </br>
    <p>보낸사람 : ${from}</p>
    `,
    //	attachments 옵션으로 첨부파일도 전송 가능함
    //	attachments : [첨부파일]
  };

  return transporter.sendMail(mailData);
}

export async function POST(req: Request) {
  const body = await req.json(); // body = ReadableStream

  // 전송받은 데이터 유효성 검사
  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: "메일 전송에 실패함" }), {
      status: 400,
    });
  }

  // Nodemailer 이메일 전송 로직
  return sendEmail(body)
    .then(
      () =>
        new Response(JSON.stringify({ message: "메일을 성공적으로 보냈음" }), {
          status: 200,
        })
    )
    .catch((error) => {
      console.error(error);

      return new Response(JSON.stringify({ message: "메일 전송에 실패함" }), {
        status: 500,
      });
    });
}
