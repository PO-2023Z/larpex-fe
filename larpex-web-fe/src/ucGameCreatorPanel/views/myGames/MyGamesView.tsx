import {useEffect, useState} from "react";
import {MyGame, MyGamesModel} from "../../viewModels/MyGamesModel.ts";
import {Button} from "react-bootstrap";
import SendGameButtonView from "./SendGameButtonView.tsx";
import EditGameButtonView from "./EditGameButtonView.tsx";
import {BallTriangle} from "react-loader-spinner";
import {getMyGames} from "../../logic/GameService.ts";
import {useNavigate} from "react-router-dom";

const MyGamesView = () => {

    const [data, setData] = useState<MyGamesModel>();
    const [loading, setLoading] = useState<boolean>(true);
    const PROPER_STATUS = "UnderDevelopment";
    const REDIRECT_BUTTON_URL: string = "/game-creator/new-game"

    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate(REDIRECT_BUTTON_URL)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getMyGames();
                setData(result);
            } catch (error) {
                setData(
                    new class implements MyGamesModel {
                        games: MyGame[] = [];
                    }
                )
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div>
                <div className="center-text mb-5 mt-3">
                    <Button className="mr-2 primary-button" onClick={handleRedirect}>Nowa Gra</Button>
                    <Button className="ml-2 primary-button" disabled={true}>Moje Gry</Button>
                </div>

                {loading || !data ? (
                    <div className="center-screen">
                        <BallTriangle
                            height={100}
                            width={100}
                            radius={5}
                            color="#8a1ff3"
                            ariaLabel="ball-triangle-loading"
                            visible={true}
                        />
                    </div>
                ) : (
                    <div className="align-content-center">
                        <table className="d-block">{
                            data.games.filter(item => item.status == PROPER_STATUS).map(item => (
                                    <li className="list-group-item organiser-panel-content-2">
                                        <tr className="row">
                                            <td className="col-8 text-center">{item.gameName}</td>
                                            <td><SendGameButtonView {...item}/></td>
                                            <td><EditGameButtonView {...item}/></td>
                                        </tr>
                                    </li>
                                )
                            )}
                        </table>
                    </div>
                )}
            </div>
        </>
    )
}

export default MyGamesView;