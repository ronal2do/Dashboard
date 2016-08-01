import React from 'react';

class Tbody extends React.Component {
  render() {
    return (
		<tbody>
            <tr>
                <td className="text-center">1</td>
                <td>Andrew Mike</td>
                <td>Develop</td>
                <td className="text-right">€ 99,225</td>
                <td className="td-actions text-right">
                    <a href="#" rel="tooltip" title="" className="btn btn-info btn-simple btn-xs" data-original-title="View Profile">
                        <i className="ti-user"></i>
                    </a>
                    <a href="#" rel="tooltip" title="" className="btn btn-success btn-simple btn-xs" data-original-title="Edit Profile">
                        <i className="ti-pencil-alt"></i>
                    </a>
                    <a href="#" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                        <i className="ti-close"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td className="text-center">2</td>
                <td>John Doe</td>
                <td>Design</td>
                <td className="text-right">€ 89,241</td>
                <td className="td-actions text-right">
                    <a href="#" rel="tooltip" title="" className="btn btn-info btn-simple btn-xs" data-original-title="View Profile">
                        <i className="ti-user"></i>
                    </a>
                    <a href="#" rel="tooltip" title="" className="btn btn-success btn-simple btn-xs" data-original-title="Edit Profile">
                        <i className="ti-pencil-alt"></i>
                    </a>
                    <a href="#" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                        <i className="ti-close"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td className="text-center">3</td>
                <td>Alex Mike</td>
                <td>Design</td>
                <td className="text-right">€ 92,144</td>
                <td className="td-actions text-right">
                    <a href="#" rel="tooltip" title="" className="btn btn-info btn-simple btn-xs" data-original-title="View Profile">
                        <i className="ti-user"></i>
                    </a>
                    <a href="#" rel="tooltip" title="" className="btn btn-success btn-simple btn-xs" data-original-title="Edit Profile">
                        <i className="ti-pencil-alt"></i>
                    </a>
                    <a href="#" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                        <i className="ti-close"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td className="text-center">4</td>
                <td>Mike Monday</td>
                <td>Marketing</td>
                <td className="text-right">€ 49,990</td>
                <td className="td-actions text-right">
                    <a href="#" rel="tooltip" title="" className="btn btn-info btn-simple btn-xs" data-original-title="View Profile">
                        <i className="ti-user"></i>
                    </a>
                    <a href="#" rel="tooltip" title="" className="btn btn-success btn-simple btn-xs" data-original-title="Edit Profile">
                        <i className="ti-pencil-alt"></i>
                    </a>
                    <a href="#" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                        <i className="ti-close"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td className="text-center">5</td>
                <td>Paul Dickens</td>
                <td>Communication</td>
                <td className="text-right">€ 69,201</td>
                <td className="td-actions text-right">
                    <a href="#" rel="tooltip" title="" className="btn btn-info btn-simple btn-xs" data-original-title="View Profile">
                        <i className="ti-user"></i>
                    </a>
                    <a href="#" rel="tooltip" title="" className="btn btn-success btn-simple btn-xs" data-original-title="Edit Profile">
                        <i className="ti-pencil-alt"></i>
                    </a>
                    <a href="#" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                        <i className="ti-close"></i>
                    </a>
                </td>
            </tr>
        </tbody>
    );
  }
}

export default (Tbody);