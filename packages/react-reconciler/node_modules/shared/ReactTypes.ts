/*
 * @Author: root 931097192@qq.com
 * @Date: 2024-05-25 00:19:05
 * @LastEditors: root 931097192@qq.com
 * @LastEditTime: 2024-05-25 14:54:26
 * @FilePath: \react\packages\shared\ReactTypes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export type Type = any;
export type Ref = any;
export type Props = any;
export type Key = any;
export type ElementType = any;

export interface ReactElementType {
	$$typeof: symbol | number;
	type: Type;
	key: Key;
	props: Props;
	ref: Ref;
	__mark: string;
}
