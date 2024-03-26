import PaymentOption from './PaymentOption';
import { Link } from 'react-router-dom';
import OPT from '../../../../JSON/PaymentOption';
import './pay.css'
import React from 'react'

const PayStep = () => {

    return (
        <div className='paystep-container'>
            <p className='steps'>BƯỚC 2/3</p>
            <h2 className='step2-h2'>Chọn gói dịch vụ của bạn.</h2>
            <ul class="grid w-full gap-3 md:grid-cols-4 mt-5">
                <li>
                    <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                    <label for="hosting-small" class="inline-flex items-center justify-between w-full p-3 h-full text-gray-500 bg-white border border-[#cccccc] rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-gray-400 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 peer-checked:shadow-lg peer-checked:shadow-black">
                        <div class="block w-full">
                            <PaymentOption
                                bg={OPT[0].background}
                                name={OPT[0].name}
                                opt={OPT[0].options}
                            />
                        </div>
                    </label>
                </li>
                <li>
                    <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer" />
                    <label for="hosting-big" class="inline-flex items-center justify-between w-full p-3 h-full text-gray-500 bg-white border border-[#cccccc] rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-gray-400 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 peer-checked:shadow-lg peer-checked:shadow-black">
                        <div class="block w-full">
                            <PaymentOption
                                bg={OPT[1].background}
                                name={OPT[1].name}
                                opt={OPT[1].options}
                            />
                        </div>
                    </label>
                </li>
                <li>
                    <input type="radio" id="hosting-medium" name="hosting" value="hosting-medium" class="hidden peer" />
                    <label for="hosting-medium" class="inline-flex items-center justify-between w-full p-3 h-full text-gray-500 bg-white border border-[#cccccc] rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-gray-400 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 peer-checked:shadow-lg peer-checked:shadow-black">
                        <div class="block w-full">
                            <PaymentOption
                                bg={OPT[2].background}
                                name={OPT[2].name}
                                opt={OPT[2].options}
                            />
                        </div>
                    </label>
                </li>
                <li>
                    <input type="radio" id="hosting-custom" name="hosting" value="hosting-custom" class="hidden peer" />
                    <label for="hosting-custom" class="inline-flex items-start justify-between w-full p-3 h-full text-gray-500 bg-white border border-[#cccccc] rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-gray-400 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 peer-checked:shadow-lg peer-checked:shadow-black">
                        <div class="block w-full">
                            <PaymentOption
                                bg={OPT[3].background}
                                name={OPT[3].name}
                                opt={OPT[3].options}
                            />
                        </div>
                    </label>
                </li>
            </ul>
            <Link to="/login/step3" className='btn'>
                <p>Tiếp theo</p>
            </Link>
        </div>
    );
}

export default PayStep;