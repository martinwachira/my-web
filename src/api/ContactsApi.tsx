export async function postRemarks(remarks: any) {
  const res = await fetch(
    "https://my-portfolio-d5c38-default-rtdb.firebaseio.com/remarks.json",
    {
      method: "POST",
      body: JSON.stringify(remarks),
      headers: {
        "Content-Type": "Application/json",
      },
    }
  );
  const data = await res.json();
  if (res.status === 200) {
    console.log("data", data);
  }
}
