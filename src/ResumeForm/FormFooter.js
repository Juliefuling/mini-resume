import React from 'react';
import {SubmitButton} from "@kne/react-form-antd-taro";
import Taro from "@tarojs/taro";
import {View} from "@tarojs/components";
import style from './style.module.scss';
import {Button, FixView} from '@kne/mini-core'

const FormFooter = ({name, label, onDelete}) => {
  return <FixView className={style['btn-list']}>
    {typeof onDelete === 'function' ? <>
      <Button className={style['flex-1']} type="default" onClick={() => {
        return new Promise((resolve) => {
          // 这里的颜色后面需要修改
          Taro.showModal({
            title: `是否删除该${label}`,
            cancelText: "取消",
            confirmText: "确认",
            confirmColor: "#5CB8B2",
            success(res) {
              if (res.confirm) {
                return onDelete().finally(() => {
                  resolve();
                });
              }
              resolve();
            }
          });
        });
      }}>
        删除
      </Button>
      <Button className={style['flex-2']} type="primary">
        <SubmitButton block type="primary">
          <View id={`save_${name}`}>保存</View>
        </SubmitButton>
      </Button>
    </> : <SubmitButton block type="primary" className="submit-button">
      <View id={`save_${name}`}>保存</View>
    </SubmitButton>}
  </FixView>
};

export default FormFooter;
