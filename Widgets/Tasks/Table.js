import React from 'react';

class Table extends React.Component {
  render() {
    return (
      <table className="table">
       	<tbody>
            <tr>
                <td>
                    <label className="checkbox">
                        <span className="icons"><span className="first-icon fa fa-square"></span><span className="second-icon fa fa-check-square "></span></span><input type="checkbox" value="" data-toggle="checkbox" />
                    </label>
                </td>
                <td>Sign contract for "What are conference organizers afraid of?"</td>
                <td className="td-actions text-right">
					<div className="table-icons">
						<button type="button" rel="tooltip" title="" className="btn btn-info btn-simple btn-xs" data-original-title="Edit Task">
                            <i className="ti-pencil-alt"></i>
                        </button>
                        <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                            <i className="ti-close"></i>
                        </button>
					</div>
                </td>
            </tr>
            <tr>
                <td>
                    <label className="checkbox checked">
                        <span className="icons"><span className="first-icon fa fa-square"></span><span className="second-icon fa fa-check-square "></span></span><input type="checkbox" value="" data-toggle="checkbox" checked="" />
                    </label>
                </td>
                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                <td className="td-actions text-right">
					<div className="table-icons">
						<button type="button" rel="tooltip" title="" className="btn btn-info btn-simple btn-xs" data-original-title="Edit Task">
                            <i className="ti-pencil-alt"></i>
                        </button>
                        <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                            <i className="ti-close"></i>
                        </button>
					</div>
                </td>
            </tr>
            <tr>
                <td>
                    <label className="checkbox checked">
                        <span className="icons"><span className="first-icon fa fa-square"></span><span className="second-icon fa fa-check-square "></span></span><input type="checkbox" value="" data-toggle="checkbox" checked="" />
                    </label>
                </td>
                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit</td>
                <td className="td-actions text-right">
					<div className="table-icons">
						<button type="button" rel="tooltip" title="" className="btn btn-info btn-simple btn-xs" data-original-title="Edit Task">
                            <i className="ti-pencil-alt"></i>
                        </button>
                        <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                            <i className="ti-close"></i>
                        </button>
					</div>
                </td>
            </tr>
            <tr>
                <td>
                    <label className="checkbox">
                        <span className="icons"><span className="first-icon fa fa-square"></span><span className="second-icon fa fa-check-square "></span></span><input type="checkbox" value="" data-toggle="checkbox"/>
                    </label>
                </td>
                <td>Create 4 Invisible User Experiences you Never Knew About</td>
                <td className="td-actions text-right">
					<div className="table-icons">
						<button type="button" rel="tooltip" title="" className="btn btn-info btn-simple btn-xs" data-original-title="Edit Task">
                            <i className="ti-pencil-alt"></i>
                        </button>
                        <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                            <i className="ti-close"></i>
                        </button>
					</div>
                </td>
            </tr>
            <tr>
                <td>
                    <label className="checkbox">
                        <span className="icons"><span className="first-icon fa fa-square"></span><span className="second-icon fa fa-check-square "></span></span><input type="checkbox" value="" data-toggle="checkbox"/>
                    </label>
                </td>
                <td>Read "Following makes Medium better"</td>
                <td className="td-actions text-right">
					<div className="icons-table">
						<button type="button" rel="tooltip" title="" className="btn btn-info btn-simple btn-xs" data-original-title="Edit Task">
							<i className="ti-pencil-alt"></i>
						</button>
						<button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
							<i className="ti-close"></i>
						</button>
					</div>

                </td>
            </tr>
            <tr>
                <td>
                    <label className="checkbox">
                        <span className="icons"><span className="first-icon fa fa-square"></span><span className="second-icon fa fa-check-square "></span></span><input type="checkbox" value="" data-toggle="checkbox"/>
                    </label>
                </td>
                <td>Unfollow 5 enemies from twitter</td>
                <td className="td-actions text-right">
					<div className="table-icons">
						<button type="button" rel="tooltip" title="" className="btn btn-info btn-simple btn-xs" data-original-title="Edit Task">
                            <i className="ti-pencil-alt"></i>
                        </button>
                        <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                            <i className="ti-close"></i>
                        </button>
					</div>
                </td>
            </tr>
        </tbody>
      </table>
    );
  }
}

export default (Table);