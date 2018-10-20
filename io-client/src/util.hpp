/**
 * This file is part of input-overlay
 * which is licensed under the MPL 2.0 license
 * See LICENSE or mozilla.org/en-US/MPL/2.0/
 * github.com/univrsal/input-overlay
 */

#pragma once
#ifdef _WIN32
#include <cstdint>
#endif

#include <netlib.h>

namespace util
{
	typedef struct
	{
		bool monitor_gamepad;
		bool monitor_mouse;
		bool monitor_keyboard;
		char username[64];
		uint16_t port;
		ip_address ip;
	} config;

    enum message
    {
        MSG_READ_ERROR = -2,
		MSG_INVALID,
        MSG_NAME_NOT_UNIQUE,
        MSG_NAME_INVALID,
        MSG_SERVER_SHUTDOWN
    };

    /* Get config values and print help */
	bool parse_arguments(int argc, char** args, config* cfg);

	int send_message(tcp_socket sock, char* buf);

	uint32_t get_ticks();
    
	message recv_msg(tcp_socket sock);
}