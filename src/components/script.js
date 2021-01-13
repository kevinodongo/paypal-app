import axios from "axios";
const client_id = process.env.VUE_APP_PAYPAL_CLIENT_ID;
const client_secret = process.env.VUE_APP_PAYPAL_CLIENT_SECRET_ID;

/**
 * If you find challege then concat the url with + instead of html integral
 * "https://api-m.sandbox.paypal.com/v1/billing/subscriptions/" + subscriptionID + "/suspend"
 * =========================================================================================
 */

// retirive user subscription details
export async function retriveuserinformation(subscriptionID) {
  // 1. Call PayPal to get a token
  const auth = await axios({
    url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    method: "post",
    headers: {
      Accept: "application/json",
      "Accept-Language": "en_US",
      "content-type": "application/x-www-form-urlencoded"
    },
    auth: {
      username: client_id,
      password: client_secret
    },
    params: {
      grant_type: "client_credentials"
    }
  });
  // 2. Call PayPal to get the subscription details
  const user_subscription_details = await axios({
    url: `https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionID}`,
    method: "get",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${auth.data.access_token}`
    }
  });
  return user_subscription_details;
  // end
}

// suspend user subscription
export async function suspendusersubscription(subscriptionID) {
  // 1. Call PayPal to get a token
  const auth = await axios({
    url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    method: "post",
    headers: {
      Accept: "application/json",
      "Accept-Language": "en_US",
      "content-type": "application/x-www-form-urlencoded"
    },
    auth: {
      username: client_id,
      password: client_secret
    },
    params: {
      grant_type: "client_credentials"
    }
  });
  // 2. Call PayPal to get the subscription details
  const user_subscription_details = await axios({
    url: `https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionID}/suspend`,
    method: "post",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${auth.data.access_token}`
    },
    data: {
      reason: "Customer-requested pause" // reason
    }
  });
  return user_subscription_details;
  // end
}

// suspend user subscription
export async function cancelusersubscription(subscriptionID) {
  // 1. Call PayPal to get a token
  const auth = await axios({
    url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    method: "post",
    headers: {
      Accept: "application/json",
      "Accept-Language": "en_US",
      "content-type": "application/x-www-form-urlencoded"
    },
    auth: {
      username: client_id,
      password: client_secret
    },
    params: {
      grant_type: "client_credentials"
    }
  });
  // 2. Call PayPal to get the subscription details
  const user_subscription_details = await axios({
    url: `https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionID}/cancel`,
    method: "post",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${auth.data.access_token}`
    },
    data: {
      reason: "Customer-requested pause" // reason
    }
  });
  return user_subscription_details;
  // end
}

// activate user subscription
export async function activateusersubscription(subscriptionID) {
  // 1. Call PayPal to get a token
  const auth = await axios({
    url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    method: "post",
    headers: {
      Accept: "application/json",
      "Accept-Language": "en_US",
      "content-type": "application/x-www-form-urlencoded"
    },
    auth: {
      username: client_id,
      password: client_secret
    },
    params: {
      grant_type: "client_credentials"
    }
  });
  // 2. Call PayPal to get the subscription details
  const user_subscription_details = await axios({
    url: `https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionID}/activate`,
    method: "post",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${auth.data.access_token}`
    },
    data: {
      reason: "Reactivating on customer request"
    }
  });
  return user_subscription_details;
  // end
}
