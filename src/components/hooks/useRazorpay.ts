import { createPremiumOrder, verifyPayment } 
  from "../../utils/payment";

export function useRazorpay(onSuccess: () => void) {

  async function startPayment(examType: string) {

    console.log("PAY CLICKED");

    const order = await createPremiumOrder(examType);

    const options = {
      key: order.key,
      amount: order.amount,
      currency: order.currency,
      name: "Biology Mock Tests",
      description: "Premium Mock Test Pack",
      order_id: order.orderId,

      handler: async function (response: any) {

        await verifyPayment({
          razorpayOrderId: response.razorpay_order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpaySignature: response.razorpay_signature
        });

        onSuccess(); // reload tests
      },

      theme: { color: "#2e7d32" }
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  }

  return { startPayment };
}
