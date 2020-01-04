import React from 'react';

const AboutPage = () => (
    <div className="about">
        <h1 className="app--title">このサービスについて</h1>
        <p className="appPage--description">所在地近くのホテルを検索できます！</p>
        <section className="appPage__area">
            <div className="appPage__panel appPage__panel--search">
                <div className="appPage__panel--main">
                    <h2 className="appPage__panel--title">所在地で検索する</h2>
                    <p className="appPage__panel--details">「東京タワー」など所在地を入力して検索すると、<br />
                    所在地近くのホテルの一覧が表示されます。
                    <br/>
                    <br/>リンクをクリックすると、
                    <br/>楽天トラベルのページへ遷移し、
                    <br/>ホテルの詳細を確認できます。
                    </p>
                </div>
                
            </div>
            <div className="appPage__panel">
                <div className="appPage__panel--main">
                    <h2 className="appPage__panel--title">ソート機能</h2>
                    <p className="appPage__panel--details">以下の項目で一覧をソートできます。</p>
                    <ul className="appPage__panel--ul">
                        <li>値段：価格の安い順</li>
                        <li>レビュー：得点の高い順</li>
                        <li>レビュー件数：件数の多い順</li>
                        <li>距離：所在地から近い順</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
);

export default AboutPage;