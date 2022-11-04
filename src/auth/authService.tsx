import { useState } from 'react';
import { connectWallet, disconnnectWallet } from '../web3/interact';
import axios from 'axios';

export const authService = () => {
    return {          
        authUser: connectWallet,
        authLogout: disconnnectWallet
    }
} 