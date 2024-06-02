/*
 * @Author: root 931097192@qq.com
 * @Date: 2024-06-02 19:48:51
 * @LastEditors: root 931097192@qq.com
 * @LastEditTime: 2024-06-02 19:49:17
 * @FilePath: \react\babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
	presets: ['@babel/preset-env'],
	plugins: [['@babel/plugin-transform-react-jsx', { throwIfNamespace: false }]]
};
