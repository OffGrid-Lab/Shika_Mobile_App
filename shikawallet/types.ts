export type AppScreen = {
    name: string;
    title?: string;
    headerShow?: boolean;
}

export type Phone = {
    code: string;
    value: string;
}
export type User = {
    username: string;
    fullname: string;
    about?: string;
    email?: string;
    phone: Phone;
    country: string;
    city: string;
    address: string;
    zip: string;
    kyc: KycProcessStatus;
    creditScore?: number;
    reputation?: string;
}

export type KycProcessStatus = {
    status: "null" | "pending" | "verified";
    documentType: string;
}


export type GroupWallet = {
    group_id: string;
    wallet: string;
    balance: number;
    BaseCoin: string;

}

export type GroupMessages = {
    group_id: string;
    messages: string[];
}

export type GroupTransaction = {
    trx_id: string;
    type: string; //send,payout
    from: string; //send : from user to groupWallet
    to: string; //payout : from groupWallet to user
    value: number;
    fee: number;
}
export type ShikaCycle = {
    status: "new" | "pending" | "paid";
    nextUserToBePaid: User;
    prevPaidUsers: User[];
}
export type Group = {
    id: string;
    name: string;
    about: string;
    admin: User;
    users: User[];
    messages: GroupMessages;
    transactions: GroupTransaction[];
    amountToSend: number;
    wallet: GroupWallet;
    cycle: ShikaCycle;

}