import React from 'react'
import style from '@/app/ui/Dashboard/Setting/ChangePassword/ChangePassword.module.css';
const Setting = () => {
  return (
    <div className={style.container}>
        <div className={style.from}>
            <h3> Change Password</h3>
            <div className={style.col}>
                <div className={style.title}>
                    <h3> Current Password</h3>
                </div>
                <div className={style.colInput}>
                    <input type='text' />
                </div>
            </div>
            <div className={style.col}>
                <div className={style.title}>
                    <h3> New Password</h3>
                </div>
                <div className={style.colInput}>
                    <input type='text' />
                </div>
            </div>
            <div className={style.col}>
                <div className={style.title}>
                    <h3> Confirm New Password</h3>
                </div>
                <div className={style.colInput}>
                    <input type='text' />
                </div>
            </div>
            <div className={style.col}>
                <div className={style.col}>
                    <button  className={style.btn}> Save</button>
                </div>
            </div>

        </div>


    </div>
  )
}

export default Setting;