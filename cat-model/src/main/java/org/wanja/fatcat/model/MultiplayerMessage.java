package org.wanja.fatcat.model;


public class MultiplayerMessage {
    public enum MessageType {
        PLAYER_JOINED,
        PLAYER_REMOVED,
        START_GAME,
        CLOSE_GAME,
        GAME_UPDATE,
        GAME_STARTED,
        BROADCAST_CHAT,
        GAME_OVER,
        PLAYER_GAVE_UP,
        PLAYER_PAUSED_GAME,
    }

    // message type
    public MessageType type;
    public String message;

    // must always be set
    public Long playerId;
    public Long gameId;

    // elements to be updated
    public int dx;
    public int dy;
    public int x;
    public int y;

    // Actions I did
    public boolean bombPlaced = false;
    public boolean gutterThrown = false;
    public boolean magicBolt = false;
    public boolean magicFirespin = false;
    public boolean magicNebula = false;
    public boolean magicProtectionCircle = false;
    public boolean chestCollected = false;
    public boolean injuredByEnemy = false;
    public String enemyType;

    // I was hurt by a remote player
    public boolean hurtByBomb=false;
    public boolean hurtByNebula=false;
    public boolean hurtByBolt=false;
    public boolean hurtByFirespin=false;
    public Long remotePlayerIdWhoHurtMe=null;

    
    public long score = 0L;
    public int energy;
    public boolean hasChanged;
    public boolean levelOver;
    public boolean isPaused;

    public static MultiplayerMessage playerJoined(Long playerId, Long gameId) {
        MultiplayerMessage mm = new MultiplayerMessage(MessageType.PLAYER_JOINED);
        mm.gameId = gameId;
        mm.playerId = playerId;
        mm.message  = "New player joined the game";
        return mm;
    }

    public static MultiplayerMessage playerRemoved(Long playerId, Long gameId) {
        MultiplayerMessage mm = new MultiplayerMessage(MessageType.PLAYER_REMOVED);
        mm.gameId = gameId;
        mm.playerId = playerId;
        mm.message  = "Player removed from game";
        return mm;
    }

    public static MultiplayerMessage gameStarting(Long gameId) {
        MultiplayerMessage mm = new MultiplayerMessage(MessageType.START_GAME);
        mm.gameId = gameId;        
        mm.message= "Game is starting";
        return mm;
    }

    public static MultiplayerMessage gameClosing(Long gameId) {
        MultiplayerMessage mm = new MultiplayerMessage(MessageType.CLOSE_GAME);
        mm.gameId = gameId;
        mm.message="Game is closing";
        return mm;
    }

    public static MultiplayerMessage broadcastMessage(Long gameId, String message) {
        MultiplayerMessage mm = new MultiplayerMessage(MessageType.BROADCAST_CHAT);
        mm.gameId = gameId;
        mm.message = message;
        return mm;
    }


    public MultiplayerMessage() {
    }

    public MultiplayerMessage(MessageType type) {
        this.type = type;
    }
}
