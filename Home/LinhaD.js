import React from 'react';

class LinhaD extends React.Component {
  render() {
    return (
      <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <div className="card">
                        <div className="content">
                            <div className="row">
                                <div className="col-xs-7">
                                    <div className="numbers pull-left">
                                        $34,657
                                    </div>
                                </div>
                                <div className="col-xs-5">
                                    <div className="pull-right" style="padding-top:7px;">
                                        <span className="label label-success">
                                            +18%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h6 className="big-title">total earnings <span className="text-muted">in last</span> ten <span className="text-muted">quarters</span></h6>
                            <div id="chartTotalEarnings"><svg xmlnsCt="http://gionkunz.github.com/chartist-js/ct" width="100%" height="210px" className="ct-chart-line" style={{width: '100%', height: '210px'}}><g className="ct-grids"></g><g><g className="ct-series ct-series-a"><path d="M50,129C55.111,125.333,70.443,112.667,80.664,107C90.885,101.333,101.107,93.667,111.328,95C121.549,96.333,131.771,120.667,141.992,115C152.214,109.333,162.435,67.667,172.656,61C182.878,54.333,193.099,82.667,203.32,75C213.542,67.333,228.874,25,233.984,15" className="ct-line ct-green"></path></g></g><g className="ct-labels"><foreignObject style={{overflow: 'visible'}} x="50" y="180" width="30.6640625" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 31px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Jan</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="80.6640625" y="180" width="30.6640625" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 31px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Feb</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="111.328125" y="180" width="30.6640625" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 31px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Mar</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="141.9921875" y="180" width="30.6640625" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 31px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">April</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="172.65625" y="180" width="30.6640625" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 31px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">May</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="203.3203125" y="180" width="30.6640625" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 31px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">June</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="155" x="10" height="20" width="30"><span className="ct-label ct-vertical ct-start" style="height: 20px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">0</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="135" x="10" height="20" width="30"><span className="ct-label ct-vertical ct-start" style="height: 20px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">100</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="115" x="10" height="20" width="30"><span className="ct-label ct-vertical ct-start" style="height: 20px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">200</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="95" x="10" height="20" width="30"><span className="ct-label ct-vertical ct-start" style="height: 20px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">300</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="75" x="10" height="20" width="30"><span className="ct-label ct-vertical ct-start" style="height: 20px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">400</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="55" x="10" height="20" width="30"><span className="ct-label ct-vertical ct-start" style="height: 20px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">500</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="35" x="10" height="20" width="30"><span className="ct-label ct-vertical ct-start" style="height: 20px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">600</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="15" x="10" height="20" width="30"><span className="ct-label ct-vertical ct-start" style="height: 20px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">700</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="-15" x="10" height="30" width="30"><span className="ct-label ct-vertical ct-start" style={{height: '30px', width: '30px'}} xmlns="http://www.w3.org/2000/xmlns/">800</span></foreignObject></g></svg></div>
                        </div>
                        <div className="card-footer">
                            <hr/>
                            <div className="footer-title">Financial Statistics</div>
                            <div className="pull-right">
                                <button className="btn btn-info btn-fill btn-icon btn-sm">
                                    <i className="ti-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="card">
                        <div className="content">
                            <div className="row">
                                <div className="col-xs-7">
                                    <div className="numbers pull-left">
                                        169
                                    </div>
                                </div>
                                <div className="col-xs-5">
                                    <div className="pull-right" style="padding-top:7px;">
                                        <span className="label label-danger">
                                            -14%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h6 className="big-title">total subscriptions <span className="text-muted">in last</span> 7 days</h6>
                            <div id="chartTotalSubscriptions"><svg xmlnsCt="http://gionkunz.github.com/chartist-js/ct" width="100%" height="210px" className="ct-chart-line" style={{width: '100%', height: '210px'}}><g className="ct-grids"></g><g><g className="ct-series ct-series-a"><path d="M50,79C54.381,81.667,67.522,87,76.283,95C85.045,103,93.806,127,102.567,127C111.328,127,120.089,105.667,128.85,95C137.612,84.333,146.373,65.667,155.134,63C163.895,60.333,172.656,84.333,181.417,79C190.179,73.667,198.94,41.667,207.701,31C216.462,20.333,229.604,17.667,233.984,15" className="ct-line ct-red"></path></g></g><g className="ct-labels"><foreignObject style={{overflow: 'visible'}} x="50" y="180" width="26.283482142857142" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 26px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">M</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="76.28348214285714" y="180" width="26.283482142857142" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 26px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">T</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="102.56696428571428" y="180" width="26.283482142857146" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 26px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">W</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="128.85044642857144" y="180" width="26.28348214285714" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 26px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">T</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="155.13392857142856" y="180" width="26.283482142857153" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 26px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">F</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="181.41741071428572" y="180" width="26.28348214285714" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 26px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">S</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="207.70089285714286" y="180" width="30" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 30px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">S</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="155" x="10" height="20" width="30"><span className="ct-label ct-vertical ct-start" style="height: 20px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">0</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="135" x="10" height="20" width="30"><span className="ct-label ct-vertical ct-start" style="height: 20px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">12.5</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="115" x="10" height="20" width="30"><span className="ct-label ct-vertical ct-start" style="height: 20px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">25</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="95" x="10" height="20" width="30"><span className="ct-label ct-vertical ct-start" style="height: 20px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">37.5</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="75" x="10" height="20" width="30"><span className="ct-label ct-vertical ct-start" style="height: 20px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">50</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="55" x="10" height="20" width="30"><span className="ct-label ct-vertical ct-start" style="height: 20px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">62.5</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="35" x="10" height="20" width="30"><span className="ct-label ct-vertical ct-start" style="height: 20px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">75</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="15" x="10" height="20" width="30"><span className="ct-label ct-vertical ct-start" style="height: 20px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">87.5</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="-15" x="10" height="30" width="30"><span className="ct-label ct-vertical ct-start" style={{height: '30px', width: '30px'}} xmlns="http://www.w3.org/2000/xmlns/">100</span></foreignObject></g></svg></div>
                        </div>
                        <div className="card-footer">
                            <hr/>
                            <div className="footer-title">View all members</div>
                            <div className="pull-right">
                                <button className="btn btn-default btn-fill btn-icon btn-sm">
                                    <i className="ti-angle-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="card">
                        <div className="content">
                            <div className="row">
                                <div className="col-xs-7">
                                    <div className="numbers pull-left">
                                        8,960
                                    </div>
                                </div>
                                <div className="col-xs-5">
                                    <div className="pull-right" style="padding-top:7px;">
                                        <span className="label label-warning">
                                            ~51%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h6 className="big-title">total downloads <span className="text-muted">in last</span> 6 years</h6>
                            <div id="chartTotalDownloads"><svg xmlnsCt="http://gionkunz.github.com/chartist-js/ct" width="100%" height="210px" className="ct-chart-line" style={{width: '100%', height: '210px'}}><g className="ct-grids"></g><g><g className="ct-series ct-series-a"><path d="M50,153.667C55.111,154.259,70.443,164.007,80.664,157.222C90.885,150.437,101.107,134.719,111.328,112.956C121.549,91.193,131.771,25.951,141.992,26.644C152.214,27.338,162.435,99.993,172.656,117.116C182.878,134.239,198.21,127.338,203.32,129.382" className="ct-line ct-orange"></path></g></g><g className="ct-labels"><foreignObject style={{overflow: 'visible'}} x="50" y="180" width="30.6640625" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 31px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">2009</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="80.6640625" y="180" width="30.6640625" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 31px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">2010</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="111.328125" y="180" width="30.6640625" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 31px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">2011</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="141.9921875" y="180" width="30.6640625" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 31px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">2012</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="172.65625" y="180" width="30.6640625" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 31px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">2013</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="203.3203125" y="180" width="30.6640625" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 31px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">2014</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="139.44444444444446" x="10" height="35.55555555555556" width="30"><span className="ct-label ct-vertical ct-start" style="height: 36px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">0</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="103.8888888888889" x="10" height="35.55555555555556" width="30"><span className="ct-label ct-vertical ct-start" style="height: 36px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">2000</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="68.33333333333333" x="10" height="35.55555555555556" width="30"><span className="ct-label ct-vertical ct-start" style="height: 36px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">4000</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="32.77777777777777" x="10" height="35.55555555555556" width="30"><span className="ct-label ct-vertical ct-start" style="height: 36px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">6000</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="2.7777777777777715" x="10" height="30" width="30"><span className="ct-label ct-vertical ct-start" style={{height: '30px', width: '30px'}} xmlns="http://www.w3.org/2000/xmlns/">8000</span></foreignObject></g></svg></div>
                        </div>
                        <div className="card-footer">
                            <hr/>
                            <div className="footer-title">View more details</div>
                            <div className="pull-right">
                                <button className="btn btn-success btn-fill btn-icon btn-sm">
                                    <i className="ti-info"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    );
  }
}

export default (LinhaD);