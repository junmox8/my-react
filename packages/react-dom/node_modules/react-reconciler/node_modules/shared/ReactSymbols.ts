/*
 * @Author: root 931097192@qq.com
 * @Date: 2024-05-25 00:09:24
 * @LastEditors: root 931097192@qq.com
 * @LastEditTime: 2024-05-25 00:17:01
 * @FilePath: \react\packages\shared\ReactSymbols.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const supportSymbol = typeof Symbol === 'function' && Symbol.for;

export const REACT_ELEMENT_TYPE = supportSymbol
	? Symbol.for('react.element')
	: 0xeac7;
